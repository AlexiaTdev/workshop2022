import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import {Link} from "react-router-dom";

export default class HomeSite extends PureComponent {
  static propTypes = {}

  render() {
    return (
        <div>
            <h1>Hello World</h1>
            <Link to="about">About Us</Link>
            <Link to="service">Service</Link>
            <Link to="entreprise">Entreprise</Link>
            <Link to="particulier">Particulier</Link>
        </div>
    )
  }
}
