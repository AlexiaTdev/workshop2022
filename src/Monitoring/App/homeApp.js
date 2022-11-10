import React, { useState, Component } from 'react';
import AppHeader from './AppHeader'
import NavBarre from './NavBarre'
import HomeUser from './User/HomeUser'
import HomeETP from './ETP/HomeETP'

export class homeApp extends Component {
    constructor(props) {
        super(props);
        this.setStateOfPage.bind(this);
        this.state = {
            title: "",
            currentPage:0,
            userType:'user'
        };
      }
      setStateOfPage = (newTitle) => {
        this.setState({currentPage: newTitle});
      }

  render() {
    return (
        <>
        <div style={{backgroundColor:'#d3d3d3'}}>
            <AppHeader/>
            <NavBarre userType={this.state.userType} setStateOfPage = {this.setStateOfPage} />
            

            {this.state.userType==='user'?
                <HomeUser currentPage={this.state.currentPage}/>
            :
                <HomeETP />}
        </div>
        </>
    )
  }
}
export default homeApp