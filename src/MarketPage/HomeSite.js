import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import {Link} from "react-router-dom";
import Navbar from './NavbarCpnt/Navbar';

export default class HomeSite extends PureComponent {
  static propTypes = {}

  render() {
    return (
        <div>
            <Navbar />
            <h1>Hello World</h1>
        </div>
    )
  }
}
