import React, { PureComponent } from 'react'



export class NavBarre extends PureComponent {
    userType = 'user';
    
    btnStyle = {flex:1, textAlign:'center', border: '2px dashed blue', margin:'0 2.5% 0 2.5%' }

  render() {
    return (<div style={{display:'flex', border: '2px dashed #f69c55'}}>
        <button style={this.btnStyle}>Home</button>
        <button style={this.btnStyle}>Contrat</button>
        <button style={this.btnStyle}>Economies</button>
        {this.userType=='user'?
            <button style={this.btnStyle}>EconomiesUser</button>
        :''}
    </div>
    )
  }
}

export default NavBarre