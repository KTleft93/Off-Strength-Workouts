import React, { Component } from "react";
import Chart from "react-apexcharts";
import '../App.css';

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['Strength', 'Cardio', 'Endurance', 'Flexilbilty', 'Athleticism', 'Muscle Size', 'Balance', 'Coordination', 'Explosiveness']
        }
      },
      series: [
        {
          name: "series-1",
          data: [100, 100, 100, 100, 100, 100, 100, 100]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="650"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;