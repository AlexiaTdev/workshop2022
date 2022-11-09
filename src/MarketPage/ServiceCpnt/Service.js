import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import './service.css';
import Navbar from '../NavbarCpnt/Navbar';

export class Service extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className="service-p">
        <Navbar />
        <div className="title-service">service</div>
      </div>
    )
  }
}

export default Service