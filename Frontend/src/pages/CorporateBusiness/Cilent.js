// React Basic and Bootstrap
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Containers
import ReviewsSlider from "../../components/Shared/ReviewsSlider";

//Import Images
import img1 from "../../assets/images/client/C.jpg";
import img2 from "../../assets/images/client/J.jpg";
import img3 from "../../assets/images/client/M.jpg";
import img4 from "../../assets/images/client/V.jpg";
import img5 from "../../assets/images/client/W.jpg";
import img6 from "../../assets/images/client/TAxUP.jpg";

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        {
          id: 1,
          img: img1,
          name: "Csy",
          desc:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
          rating: 5,
        },
        {
          id: 2,
          img: img2,
          name: "Jungle",
          desc:
            "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
          rating: 4.5,
        },
        {
          id: 3,
          img: img3,
          name: "M lady",
          desc:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          rating: 5,
        },
        {
          id: 4,
          img: img4,
          name: "Venita",
          desc:
            "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
          rating: 5,
        },
        {
          id: 5,
          img: img5,
          name: "William",
          desc:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
          rating: 5,
        },
        {
          id: 6,
          img: img6,
          name: "TAxUP",
          desc:
            "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
          rating: 5,
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">
                Our Clients Said{" "}
                </h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{" "}
                  <span className="text-primary fw-bold">
                    UPFUE
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
              </div>
            </Col>
          </Row>

          {/* clients slider */}
          <ReviewsSlider reviews={this.state.reviews} colClass="mt-4" />
        </Container>
      </React.Fragment>
    );
  }
}

export default Client;
