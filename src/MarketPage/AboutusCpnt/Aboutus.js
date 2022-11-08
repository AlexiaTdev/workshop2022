import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import './aboutus.css';

export class Aboutus extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className="aboutus-p">
        <nav>
          <div className="link-home"><Link to="/">Home</Link></div>
        </nav>

        <div className="title-about">À propos de nous</div>
      </div>
    )
  }
}

export default Aboutus