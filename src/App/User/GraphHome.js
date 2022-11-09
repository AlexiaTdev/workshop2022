import React, { Component } from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import ChartsUser from './component/ChartsUser';
import KPIListUser from './component/KPIListUser'


export default class GraphHome extends Component {

    

  render() {
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
            


        </div>
      
    )
  }
}
