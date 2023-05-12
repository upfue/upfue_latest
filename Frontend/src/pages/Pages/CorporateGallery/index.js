// React Basic and Bootstrap
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Card,
  CardBody,
} from 'reactstrap';
import NavBar from '../../CorporateBusiness/NavBar';
import Footer from '../../Pages/PageFooterLayouts/Footer1';
//Import components
import axios from 'axios';
import GalleryPhoto from '../../../components/GalleryPhoto';
const CorporateGallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    axios
      .get('/api/v1/gallery/allgallery')
      .then((res) => {
        console.log(res.data);
        setGallery(res.data.gallery);
        console.log(res.data.gallery);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      {/* breadcrumb */}
      <section className="bg-half-170 bg-light d-table w-100">
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="pages-heading">
                <h4 className="title mb-0"> UPFUE GALLERY </h4>
              </div>
            </div>
          </div>

          <div className="position-breadcrumb">
            <nav aria-label="breadcrumb" className="d-inline-block">
              <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                <li className="breadcrumb-item">
                  <Link to="/">Upfue</Link>
                </li>{' '}
                <li className="breadcrumb-item active" aria-current="page">
                  Gallery
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="section">
        <Container>
          <div>
            <Row>
              {gallery.length > 0 &&
                gallery.map((gallery, key) => (
                  <Col
                    lg={4}
                    md={6}
                    xs={12}
                    key={key}
                    className="mt-4 pt-2 d-flex"
                  >
                    <GalleryPhoto key={gallery._id} {...gallery} />
                  </Col>
                ))}
            </Row>
          </div>
          <Row>
            <Col xs="12" className="mt-4 pt-2">
              <Pagination listClassName="justify-content-center mb-0">
                <PaginationItem>
                  <PaginationLink to="#">Prev</PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink to="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink to="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink to="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink to="#">Next</PaginationLink>
                </PaginationItem>
              </Pagination>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  );
};
export default CorporateGallery;
