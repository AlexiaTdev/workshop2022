import React, { PureComponent } from 'react'
import ContractUser from './ContractUser'
import GraphHome from './GraphHome'
import EconomiesUser from './EconomiesUser'

export default class HomeUser extends PureComponent {



  render() {
    return (
        <div style={{display:'flex', margin: '2.5%', flexDirection: 'column'}}>
          <h3 style={{flex:1, textAlign:'center'}}>HOME USER</h3>
          {this.props.currentPage===0? 
            <div style={{flex:1, textAlign:'center'}}>
              <GraphHome />
            </div>
          :this.props.currentPage===1?
            <div style={{flex:1, textAlign:'center'}}>
              <ContractUser/>
            </div>
          :this.props.currentPage===2?
            <EconomiesUser />
          : <p>inEcoUser</p>
        }
        </div>

    )
  }
}
