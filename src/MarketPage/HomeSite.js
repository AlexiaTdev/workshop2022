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
        <div className="bgc mx-auto"/>
        <div className="carousel-p">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://qalway.com/_nuxt/img/QH1_1.5365643.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://qalway.com/_nuxt/img/QH1_2.0a033d0.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://qalway.com/_nuxt/img/QH1_3.27bb1f8.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
