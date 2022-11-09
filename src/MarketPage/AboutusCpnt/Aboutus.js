import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import './aboutus.css';
import Navbar from '../NavbarCpnt/Navbar';

export class Aboutus extends PureComponent {
  static propTypes = {}

  async componentDidMount() {
    console.log('componentDidMount')
    // GET request using fetch with async/await
    console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------")
    const response = await fetch('https://www.ecochauffage.guitteny.net:3000/api/user', {mode:'cors'});
    const data = await response.json();
    this.setState({ totalReactPackages: data.total })
    console.log("ICIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
    console.log(data);
  };

  render() {
    return (
      <div className="aboutus-p">
        <Navbar />
        <div className="title-about">À propos de nous</div>
      </div>
    )
  }
}

export default Aboutus