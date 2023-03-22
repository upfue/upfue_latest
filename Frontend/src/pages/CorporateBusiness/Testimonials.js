import React from "react";
import { Container } from "reactstrap";

//Import Containers
import SectionTitle from "../../components/Shared/SectionTitle";

const Testimonials = () => {
  return (
    <React.Fragment>
      <Container>
        {/* section title */}
        <SectionTitle
          title="Our Partner"
          desc="that can provide everything you need to generate awareness, drive traffic, connect."
        />
      </Container>
    </React.Fragment>
  );
};

export default Testimonials;
