// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, } from "reactstrap";
import landingvideo from '../../assets/video/Landingvideo.mp4'

class Section extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="swiper-slider-hero position-relative d-block">
          <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <video autoPlay loop muted controls src={landingvideo} className="d-block w-100" alt="..."/>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Section;
