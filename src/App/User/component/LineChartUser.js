import React, { Component } from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [0, 0, 0, 0, 0, 10],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [0, 0, 0, 0, 0, 10],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };



export class LineChartUser extends Component {
    

  render() {
    return (
        <>
            <div className="App">
                <Line options={options} data={data} />
            </div>

        </>

    )
  }
}

export default LineChartUser