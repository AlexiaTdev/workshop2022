import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import './navbar.css';

export class Navbar extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className="navbar-p">
        <nav>
          <div className="link-home"><Link to="/aboutus">About us</Link></div>
          <div className="link-home"><Link to="/Service">Service</Link></div>
          <div className="link-home"><Link to="/Entreprise">Entreprise</Link></div>
          <div className="link-home"><Link to="/Particulier">Particulier</Link></div>       
        </nav>
      </div>
    )
  }
}

export default Navbar