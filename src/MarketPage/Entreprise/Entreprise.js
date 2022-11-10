import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import './entreprise.css';

export class entreprise extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className="entreprise-p">
        <nav>
          <div className="link-home"><Link to="/">Home</Link></div>
        </nav>

        <div className="title-entreprise">entreprise</div>
      </div>
    )
  }
}

export default entreprise