import React, { Component } from 'react'

export default class KPIListUser extends Component {
    cardStyle = {flex:1, textAlign:'center', border: '2px dashed blue', margin:'0 2.5% 0 2.5%' };
    textValueStyle = { color:'blue', fontFamily:'verdana', fontSize:'250%'}
  render() {
    return (
        <div style={{display:'flex'}}>
                <div style={this.cardStyle}>
                    <p>Carbonne théorique en kg</p>
                    <p style={this.textValueStyle}>300</p>
                </div>
                <div style={this.cardStyle}>
                    <p>Carbonne économisé en kg</p>
                    <p style={this.textValueStyle}>20</p>
                </div>
                <div style={this.cardStyle}>
                    <p>Consommation kwh</p>
                    <p style={this.textValueStyle}>200kwh</p>
                </div>
                <div style={this.cardStyle}>
                    <p>Consommation kwh * €</p>
                    <p style={this.textValueStyle}>30€ /mois</p>
                </div>
                <div style={this.cardStyle}>
                    <p>Consommation kwh * € en %</p>
                    <p style={this.textValueStyle}>5%</p>
                </div>
                
        </div>
      
    )
  }
}
