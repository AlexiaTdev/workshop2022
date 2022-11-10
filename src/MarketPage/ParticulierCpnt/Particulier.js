import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import './particulier.css';
import Navbar from '../NavbarCpnt/Navbar';

export class Particulier extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div>
        <Navbar />
        <div className="bgc mx-auto" />
        <img className="img-p rounded" src="https://actifsas.com/wp-content/uploads/2020/02/slide-economie-ecologie.jpg"/>
        <h4 className="div-h4-p">
          Notre idée est de proposer la location et l’installation de serveurs chauffage, se
          substituant aux radiateurs électriques classiques ou chauffages au gaz.
          Notre originalité réside dans son coût… vous ne payez que 10% du coût de
          sa consommation électrique !
        </h4>
      </div>
    )
  }
}

export default Particulier