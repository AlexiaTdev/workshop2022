import React, { Component } from 'react'
import PieChartUser from './PieChartUser'
import LineChartUser from './LineChartUser'

export default class ChartsUser extends Component {

  render() {
    return (
        <div style={{display:'flex'}}>
            <div style={{flex:1 }}>
                <PieChartUser />
            </div>
            <div style={{flex:1 }}>
                <LineChartUser />
            </div>
            <div style={{flex:1 }}>
                <LineChartUser />
            </div>
        </div>

    )
  }
}
