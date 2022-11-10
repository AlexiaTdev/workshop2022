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
        text: 'Température moyenne par heure',
      },
    },
  };
  
  const labels = [];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Température',
        data: [30, 40, 50],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };



export class LineChartUser2 extends Component {
  resultat = [];
  res = [];
  async componentDidMount() {
      // GET request using fetch with async/await 
      fetch('https://apiecochauffage.guitteny.net/api/record/8')
      .then(async response => {
        const data = await response.json();
        console.log("records",data);
        this.resultat = data;
        this.res = this.resultat.slice(-10);
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        this.setState({ totalReactPackages: data.total })
      })
      .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
      });
  }
  render() {
    return (
        <>
            <div className="App">
                <Line options={options} data={data} />
            </div>
            <ul>
            {this.res.map((result) => (
                    <li key={result.temp}>{result.temp}</li>
                ))}
            </ul>
        </>

    )
  }
}

export default LineChartUser2