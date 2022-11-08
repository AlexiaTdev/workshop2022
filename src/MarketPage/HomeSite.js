import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import {Link} from "react-router-dom";

export default class HomeSite extends PureComponent {
  static propTypes = {}

  render() {
    return (
        <div>
            <h1>Hello World</h1>
            <Link to="Aboutus">About Us</Link>
            <Link to="Service">Service</Link>
            <Link to="Entreprise">Entreprise</Link>
            <Link to="Particulier">Particulier</Link>
        </div>
    )
  }
}
