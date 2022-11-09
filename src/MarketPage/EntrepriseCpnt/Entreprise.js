import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import './entreprise.css';
import Navbar from '../NavbarCpnt/Navbar';

export class Entreprise extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className="entreprise-p">
        <Navbar />
        <div className="title-entreprise">entreprise</div>
      </div>
    )
  }
}

export default Entreprise