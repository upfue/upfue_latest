// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

//Import Containers
import ReviewsSlider from '../../components/Shared/ReviewsSlider';

//Import Images
import img1 from '../../assets/images/client/C.jpg';
import img2 from '../../assets/images/client/J.jpg';
import img3 from '../../assets/images/client/M.jpg';
import img4 from '../../assets/images/client/V.jpg';
import img5 from '../../assets/images/client/W.jpg';
import img6 from '../../assets/images/client/TAxUP.jpg';

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        {
          id: 1,
          img: img1,
          name: 'Csy',
          desc: 'I recently worked with this IT solution company and I have to say, I was thoroughly impressed with their work! Their team was knowledgeable, professional, and easy to work with. They were able to understand my needs and deliver a tailored solution that exceeded my expectations. The level of expertise they showed in their field was very impressive and I appreciate the attention to detail they put into their work. Overall, I would highly recommend this company to anyone in need of IT solutions.          ',
          rating: 5,
        },
        {
          id: 2,
          img: img2,
          name: 'Jungle',
          desc: 'Hey there! Just wanted to drop a quick note to say how impressed I am with your IT solution company. Your team is incredibly knowledgeable and professional, and I appreciate the level of attention and care you put into every project. Your solutions are top-notch and have helped streamline our processes and increase our efficiency. Keep up the great work!          ',
          rating: 4.5,
        },
        {
          id: 3,
          img: img3,
          name: 'M lady',
          desc: "Hey team, I just wanted to say how impressed I am with the quality of work you've been delivering lately. Your IT solutions have been a game changer for us, helping us save time, reduce costs, and boost productivity. I really appreciate the level of collaboration and communication throughout the entire process, from planning to implementation to ongoing support. Your team truly goes above and beyond, and it shows in the results we're seeing. Keep up the amazing work!          ",
          rating: 5,
        },
        {
          id: 4,
          img: img4,
          name: 'Venita',
          desc: "Hey guys, I just wanted to give a quick shoutout to your IT solution company. I've been working with your team for a while now, and I'm consistently impressed with the level of expertise and responsiveness you bring to the table. You always go the extra mile to ensure our systems are running smoothly and securely, and your proactive approach to problem-solving has saved us from potential headaches more than once. Thanks for being such a reliable and valuable partner!          ",
          rating: 5,
        },
        {
          id: 5,
          img: img5,
          name: 'William',
          desc: "Hey, I just wanted to drop a quick note to say how happy I am with the IT solution company that we've been working with. They really know their stuff and have been super helpful in streamlining our operations and fixing any issues that come up. They're also always available when we need them, which is a huge plus. Overall, I'm really impressed with their level of service and expertise, and I'd highly recommend them to anyone looking for top-notch IT support.          ",
          rating: 5,
        },
        {
          id: 6,
          img: img6,
          name: 'TAxUP',
          desc: "I just wanted to take a minute to say how grateful I am to have found our IT solution company. Their team is amazing and always goes above and beyond to ensure our systems are running smoothly. They're super responsive and always available to answer any questions we have or troubleshoot any issues that come up.Plus, their solutions have saved us so much time and headaches.I really appreciate their expertise and dedication, and I'd recommend them to anyone looking for top-notch IT support.          ",
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
                <h4 className="title mb-4">Our Clients Said </h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{' '}
                  <span className="text-primary fw-bold">UPFUE</span> that can
                  provide everything you need to generate awareness, drive
                  traffic, connect.
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
