import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import './aboutus.css';
import Navbar from '../NavbarCpnt/Navbar';

export class Aboutus extends PureComponent {
  static propTypes = {}

  async componentDidMount() {
    // GET request using fetch with async/await
    console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------")
    // const response = await fetch('https://www.ecochauffage.guitteny.net:3000/api/user', {mode:'cors'});
    // const data = await response.json();

    // GET request using fetch with error handling
    fetch('https://www.ecochauffage.guitteny.net:3000/api/user')
      .then(async response => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        const data = await response.json();
        console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------")
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        console.log("ICIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
        this.setState({ totalReactPackages: data.total })
      })
      .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
      });

    // this.setState({ totalReactPackages: data.total })
    // console.log("ICIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
    // console.log(data);
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