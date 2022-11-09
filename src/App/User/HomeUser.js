import React, { PureComponent } from 'react'
import ContractUser from './ContractUser'
import GraphHome from './GraphHome'
import EconomiesUser from './EconomiesUser'
import EconomiesUser from './EconomiesUser'

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
            <div style={{flex:1, border: 'dashed green', textAlign:'center'}}>
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
