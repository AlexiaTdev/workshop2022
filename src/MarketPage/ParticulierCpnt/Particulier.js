import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import './particulier.css';
import Navbar from '../NavbarCpnt/Navbar';

export class Particulier extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className="particulier-p">
        <Navbar />
        <div className="title-particulier">particulier</div>
      </div>
    )
  }
}

export default Particulier