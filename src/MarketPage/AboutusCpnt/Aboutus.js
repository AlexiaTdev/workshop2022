import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import './aboutus.css';
import Navbar from '../NavbarCpnt/Navbar';

export class Aboutus extends PureComponent {
  static propTypes = {}

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