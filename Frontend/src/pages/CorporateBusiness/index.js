import React, { Component } from "react";
import { Container } from "reactstrap";
//Import file
import Section from "./Section";
import KeyFeature from "./KeyFeature";
import Price from "./Price";
import Client from "./Cilent";
import NavBar from "./NavBar";
import Footer from "../Pages/PageFooterLayouts/Footer1";
import Popup from "../../components/Layout/popup";
import Partners from "./Partners";
import Testimonials from "./Testimonials";

export default class index extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* import Section */}
        <Section />
        <section className="section bg-light" id="testimonial">
          {/* testimonials */}
          <Testimonials />

          <Container className="pt-5">
            {/* partners */}
            <Partners />
          </Container>
        </section>

        {/* Key Feature */}
        <KeyFeature />

        {/* Pricing */}
        <section className="section">
          <Price />

          {/* Client */}
          <Client />

        </section>
        <Footer />
        <Popup />
      </React.Fragment>
    );
  }
}
