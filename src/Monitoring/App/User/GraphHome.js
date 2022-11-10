import React, { Component } from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import ChartsUser from './component/ChartsUser';
import KPIListUser from './component/KPIListUser'

export default class GraphHome extends Component {
    async getUsers() {
        // GET request using fetch with error handling
        fetch('https://apiecochauffage.guitteny.net/api/user')
          .then(async response => {
      
            const data = await response.json();
      
            console.log("users",data);
            // check for error response
            if (!response.ok) {
              // get error message from body or default to response statusText
              const error = (data && data.message) || response.statusText;
              console.log("user",data);
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
    // get consommationkwh from backend
    const consommationkwh = 50;
    const carbone = 25 * consommationkwh;
    const prixReelEnEuro = consommationkwh * 0.1546
    const prixAPayer = prixReelEnEuro * 0.1
    return (
        <div style={{margin:'100, 0, 10, 0'}}>
            <div style={{display:'flex', flexDirection: 'column'}}>
                <div style={{flex:1}}>
                    <div >
                        <input
                            style={{flex:1, minWidth:'40%', maxWidth:'70%'}}
                            placeholder='filtre'
                        />
                        <BiSearchAlt />
                    </div>
                </div>
                <div style={{flex:1}}>
                    <div style={{margin: '2.5%'}}>
                        <KPIListUser  />
                    </div>
                    <div style={{ margin: '2.5%'}}>
                        <ChartsUser/>
                    </div>
                </div>
                
            </div>
            <div>

            </div>
            


        </div>
      
    )
  }
}

