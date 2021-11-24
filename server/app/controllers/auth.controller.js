const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const penv = require('dotenv');
const _ = require('lodash' );
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox185ac53b028843b987a365d20627ed4b.mailgun.org";
const mg = mailgun({apiKey: "ef51b26c95bc5f1ea7acf8c157f03e83-30b9cd6d-0a1a6d39", domain: DOMAIN})
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    name: req.body.name,
    age: req.body.age,
    height: req.body.height,
    weight: req.body.weight,
    goal: req.body.goal,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: '1d'// 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        name: user.name,
        age: user.age,
        weight: user.weight,
        height: user.height,
        goal: user.goal,
        roles: authorities,
        accessToken: token
      });
    });
};

exports.forgot = (req,res) => {
  const {email} = req.body;

  User.findOne({email}, (err, user) => {
    if(err || !user){
      return res.status(400).json({error: "User with that email does not exist."})
    }

   

    const token = jwt.sign({_id: user._id}, config.secret, {expiresIn: '3h'});
const data = {
  from: "noreply@off-strength-workouts.com",
  to: email,
  subject: "Hello",
  html: `
        <h2>Please click on the link to reset your password</h2>
        <a href="${config.clientURL}/reset/${token}">CLICK HERE TO RESET PASSWORD</a>

  `
};
    return user.updateOne({resetLink: token}, function(err, success) {
      if(err){
          return res.status(400).json({error: "reset password link error"});
      } else {
        mg.messages().send(data, function (error, body){
          if(error){
            return res.json({
              error: "There was an error "
            })
          }
          return res.json({message: 'Email has been sent, follow the instructions'});
        });
      }
    })

  })
};

exports.reset = (req,res) => {
  const {resetLink, newPass} = req.body;
  

  if(resetLink) {
    jwt.verify(resetLink, config.secret, function(error, decodedData) {
      if(error) {
        return res.status(401).json({
          error: "Incorrect token or it is expired."
        })
      }
      User.findOne({resetLink}, (err, user) => {
         if(err || !user){
            return res.status(400).json({error: "User with that token does not exist."})
    } 
      const obj = {
        password: bcrypt.hashSync(req.body.newPass, 8),
        resetLink: ''
      }

      user = _.extend(user, obj);
      user.save((err,result) => {
        if(err){
          return res.status(400).json({error: "reset password error"});
      } else {
          return res.status(200).json({message: 'Your password has been changed'});
      
      }

      })

      })
    })

  } else {

      return res.status(400).json({error: "Authentication Error"})
    

  }

  
  }

