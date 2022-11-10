import React, { Component, useEffect, useState } from 'react'
import PieChartUser from './PieChartUser'
import LineChartUser from './LineChartUser'
import LineChartUser2 from './LineChartUser2'

export default class ChartsUser extends Component {
//    state = {
//         records:[]
//     }
//     componentDidMount() {
//         fetch('https://apiecochauffage.guitteny.net/api/record/7')
//         .then(res => {
//             this.setState({...this.state, records: res.data });
//         });
//     }
resultat = [];
    async componentDidMount() {
        // GET request using fetch with async/await
        
        fetch('https://apiecochauffage.guitteny.net/api/record/8')
        .then(async response => {
          const data = await response.json();
          console.log("records",data);
          this.resultat = data;
            //   setRecords(data);
            // this.setState({})
          // check for error response
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
    // const [records,setRecords] = useState([]);
    // useEffect(() => {this.getRecords,[]})
    return (
        <div style={{display:'flex', backgroundColor: 'white'}}>
            <div style={{flex:1 }}>
                <PieChartUser />
            </div>
            <div style={{flex:1 }}>
                <LineChartUser />
            </div>
            <div style={{flex:1 }}>
                <LineChartUser2/>
            </div>

        </div>

    )
  }
}
