import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import './particulier.css';

export class Particulier extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className="particulier-p">
        <nav>
          <div className="link-home"><Link to="/">Home</Link></div>
        </nav>

        <div className="title-particulier">particulier</div>
      </div>
    )
  }
}

export default Particulier