import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import Navbar from './NavbarCpnt/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import './HomeSite.css';

export default class HomeSite extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div>
        <Navbar />
        <div className="bgc mx-auto" />
        <div className="carousel-p">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://qalway.com/_nuxt/img/QH1_1.5365643.jpg"
                alt="First slide"
              />
              <Carousel.Caption className="slide-style">
                <h3>Écochauffage</h3>
                <p>Chauffage écologique et économique</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://qalway.com/_nuxt/img/QH1_2.0a033d0.jpg"
                alt="Second slide"
              />

              <Carousel.Caption className="slide-style">
                <h3>Écochauffage</h3>
                <p>Le serveur qui remplace votre chaudière</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://qalway.com/_nuxt/img/QH1_3.27bb1f8.jpg"
                alt="Third slide"
              />

              <Carousel.Caption className="slide-style">
                <h3>Écochauffage</h3>
                <p>S'acclimate à votre habitat facilement</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="div-h4-p">
          <h4>Aujourd’hui nous faisons face à une crise énergétique mondiale, dont l'Europe
            se trouve fortement impactée à la suite de l’intensification du conflit opposant
            Ukraine et la Russie. Les prix du gaz ne cessent d’augmenter en réponse d’une baisse de
            l’offre suite à l'arrêt des exportations de la Russie.
          </h4>
        </div>
      </div>
    )
  }
}
