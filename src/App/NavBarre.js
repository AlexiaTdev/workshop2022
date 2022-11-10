import React, { Component } from 'react'

export class NavBarre extends Component {
    btnStyle = {flex:1, textAlign:'center', backgroundColor: 'rgba(33, 37, 41)', color:'rgba(159, 161, 163)', margin:'0 2.5% 0 2.5%' }

    constructor(props) {
        super(props);
        this.handleClick0.bind(this);
        this.handleClick1.bind(this);
        this.handleClick2.bind(this);
        this.handleClick3.bind(this);
    }
    handleClick0 = () => {this.props.setStateOfPage(0);}
    handleClick1 = () => {this.props.setStateOfPage(1);}
    handleClick2 = () => {this.props.setStateOfPage(2);}
    handleClick3 = () => {this.props.setStateOfPage(3);}
  render() {
    return (
        <div style={{display:'flex'}}>
            <button style={this.btnStyle} onClick={this.handleClick0}>Home</button>
            <button style={this.btnStyle} onClick={this.handleClick1}>Contrat</button>
            <button style={this.btnStyle} onClick={this.handleClick2}>Economies</button>
            {this.props.userType==='user'?
                <button style={this.btnStyle} onClick={this.handleClick3}>EconomiesUser</button>
            :''}
        </div>
    )
  }
}

export default NavBarre