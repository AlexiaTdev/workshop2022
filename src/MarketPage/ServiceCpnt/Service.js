import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import './service.css';
import Navbar from '../NavbarCpnt/Navbar';
import '../HomeSite.css';

export class Service extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className="service-p">
        <Navbar />
        <div className="bgc mx-auto" />
        <img className="rounded ecolo-img" src="https://www.cids-cref.net/wp-content/uploads/2022/04/world-ge745f7690_640.png"/>
        <img className="rounded econo-img" src="https://www.lafinancepourtous.com/wp-content/thumbnails/uploads/2020/04/crise_economique8460-tt-width-460-height-260-fill-1-crop-0-bgcolor-ffffff.png"/>
        <h4 className="service-text">Afin d’accompagner votre transition, nous vous proposons un système de monitoring permettant de suivre la consommation énergétique, les économies réalisées ainsi que les émissions de CO2.</h4>
      </div>
    )
  }
}

export default Service