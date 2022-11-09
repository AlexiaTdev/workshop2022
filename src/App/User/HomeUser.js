import React, { PureComponent } from 'react'
import GraphHome from './GraphHome'

export default class HomeUser extends PureComponent {



  render() {
    return (
        <div style={{display:'flex', border: '2px dashed #f69c55', margin: '2.5%', flexDirection: 'column'}}>
          <p style={{flex:1,  border: 'dashed red', textAlign:'center'}}>HOME USER</p>
          {this.props.currentPage===0? 
            
            <div style={{flex:1, border: 'dashed green', textAlign:'center'}}>
              <GraphHome />
            </div>
          :this.props.currentPage===1?
            <p>inContrat</p>
          :this.props.currentPage===2?
            <p>in Eco</p>
          : <p>inEcoUser</p>
        }
        </div>

    )
  }
}
