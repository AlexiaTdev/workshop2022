import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import {Link} from "react-router-dom";

export class aboutus extends PureComponent {
  static propTypes = {}

  render() {
    return (
        <Link to="/">Home</Link>
    )
  }
}

export default aboutus