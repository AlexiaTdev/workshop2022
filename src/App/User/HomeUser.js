import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class HomeUser extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div style={{display:'flex', border: '2px dashed #f69c55', margin: '2.5%'}}>
          <p style={{flex:1, border: '2px dashed red', textAlign:'center',}}>HOME USER</p>
          {this.props.currentPage===0? <p>inHome</p>
          :this.props.currentPage===1? <p>inContrat</p>
          :this.props.currentPage===2? <p>in Eco</p>
          : <p>inEcoUser</p>
        }
        </div>

    )
  }
}
