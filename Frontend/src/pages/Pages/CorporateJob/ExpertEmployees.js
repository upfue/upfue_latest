import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../../components/Shared/SectionTitle";
import CandidateBox from "./CandidateBox";

//Import Images
import image1 from "../../../assets/images/client/05.jpg";
import image2 from "../../../assets/images/client/06.jpg";
import image3 from "../../../assets/images/client/07.jpg";
import image4 from "../../../assets/images/client/08.jpg";

class ExpertEmployees extends Component {
  state = {
    candidates: [
      {
        id: 1,
        image: image1,
        name: "ShuYang Chen ",
        designation: "Web Developer",
        salary: "2500",
        link: "",
        socialIds: [
          { icon: "facebook", link: "#" },
          { icon: "instagram", link: "#" },
          { icon: "twitter", link: "#" },
          { icon: "linkedin", link: "#" },
        ],
      },
      {
        id: 2,
        image: image2,
        name: "JingYi Liu",
        designation: "Graphic Designer",
        salary: "2500",
        link: "",
        socialIds: [
          { icon: "facebook", link: "#" },
          { icon: "instagram", link: "#" },
          { icon: "twitter", link: "#" },
          { icon: "linkedin", link: "#" },
        ],
      },
      {
        id: 3,
        image: image3,
        name: "Venita Tan",
        designation: "Coordinator",
        salary: "2500",
        link: "",
        socialIds: [
          { icon: "facebook", link: "#" },
          { icon: "instagram", link: "#" },
          { icon: "twitter", link: "#" },
          { icon: "linkedin", link: "#" },
        ],
      },
      {
        id: 4,
        image: image4,
        name: "Content Creator",
        designation: "Php Developer",
        salary: "2500",
        link: "",
        socialIds: [
          { icon: "facebook", link: "#" },
          { icon: "instagram", link: "#" },
          { icon: "twitter", link: "#" },
          { icon: "linkedin", link: "#" },
        ],
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          {/* section title */}
          <SectionTitle
            title="Expert Employees"
            desc=" that can provide everything you need to generate awareness, drive traffic, connect."
          />

          <Row>
            {/* candidate box */}
            <CandidateBox candidates={this.state.candidates} />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ExpertEmployees;
