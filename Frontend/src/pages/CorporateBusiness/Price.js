import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import Pricing from "./PricingBox";

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricings: [
        {
          id: 1,
          title: "CONTENT TRANSLATION",
          price: 888,
          duration: "mo",
          buttonText: "Contact us now",
          btnLink: "",
          features: [
            { title: "Title & Description Translation" },
            { title: "Chinese to English" },
            { title: "Up To 10000 SKU Content Translation" },
            { title: "Content Translation From TaoBao According To Link Given" },
          ],
        },
        {
          id: 2,
          title: "VIDEO DESIGN",
          price: 1500,
          duration: "mo",
          buttonText: "Contact us now",
          btnLink: "",
          features: [
            { title: "Video Extraction" },
            { title: "Video Editing" },
            { title: "Video Trimming" },
            { title: "Multimedia & Graphic Design" },
            { title: "Up To 10000 SKU" },
            { title: "Up To 10000 Videos" },
            { title: "Video From TaoBao According To Link Given" },
          ],
        },
        {
          id: 3,
          title: "IMAGE DESIGN",
          price: 999,
          duration: "mo",
          buttonText: "Contact us now",
          btnLink: "",
          isActive: true,
          features: [
            { title: "Image extraction" },
            { title: "Layout planning" },
            { title: "Design arrangement" },
            { title: "Graphic Design" },
            { title: "Size Adjusting" },
            { title: "Up To 10000 SKU" },
            { title: "Up To 40000 Images" },
            { title: "Image Extraction From TaoBao According To Link Given" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="py-2" id="pricing">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Our Pricing"
              desc=" that can provide everything you need to generate awareness, drive traffic, connect"
            />

            <Row id="pricing" className="justify-content-center" >
              <Pricing pricings={this.state.pricings} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Price;
