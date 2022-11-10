import React, { Component } from 'react'

export default class KPIListUser extends Component {
    cardStyle = {flex:1, textAlign:'center', backgroundColor: '#69be94', margin:'0 2.5% 0 2.5%', height:'9%',borderRadius: '25px',width:'40%' };
    textValueStyle = { color:'white', fontFamily:'verdana', fontSize:'250%'}
  render() {
    return (
        <div style={{display:'flex'}}>
                <div style={this.cardStyle}>
                    <h4 style={{color:'white'}}>Carbonne théorique en kg</h4>
                    <p style={this.textValueStyle}>300</p>
                </div>
                <div style={this.cardStyle}>
                    <h4 style={{color:'white'}}>Carbonne économisé en kg</h4>
                    <p style={this.textValueStyle}>20</p>
                </div>
                <div style={this.cardStyle}>
                    <h4 style={{color:'white'}}>Consommation kwh</h4>
                    <p style={this.textValueStyle}>200kwh</p>
                </div>
                <div style={this.cardStyle}>
                    <h4 style={{color:'white'}}>Consommation kwh * €</h4>
                    <p style={this.textValueStyle}>30€ /mois</p>
                </div>
                
        </div>
      
    )
  }
}
