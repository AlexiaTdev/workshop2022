import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import './service.css';

export class service extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className="service-p">
        <nav>
          <div className="link-home"><Link to="/">Home</Link></div>
        </nav>

        <div className="title-service">service</div>
      </div>
    )
  }
}

export default service