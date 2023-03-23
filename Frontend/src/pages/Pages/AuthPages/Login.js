import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Label,
  Button,
  Card,
  CardBody,
} from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

// import images
import loginImg from '../../../assets/images/user/login.svg';
import React, { useEffect, useState } from 'react';
import logo from '../../../assets/images/logo-icon.png';
import { FormRow, Alert } from '../../../components';
import { useAppContext } from '../../../context/appContext';

const initialState = {
  name: '',
  email: '',
  password: '',
  isAdmin: true,
};

const LoginPage = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading, showAlert, displayAlert } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, isAdmin,name } = values;
    if (!email || !password || (!isAdmin&& !name)) {
      displayAlert();
      return;
    }
    console.log(values);
  };

  return (
    <React.Fragment>
      <div className="back-to-home">
        <Link to="/" className="back-button btn btn-icon btn-primary">
          <i>
            <FeatherIcon icon="arrow-left" className="icons" />
          </i>
        </Link>
      </div>
      <section className="bg-home d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} md={6}>
              <div className="me-lg-5">
                <img
                  src={loginImg}
                  className="img-fluid d-block mx-auto"
                  alt=""
                />
              </div>
            </Col>
            <Col lg={5} md={6}>
              <Card className="login-page bg-white shadow rounded border-0">
                <CardBody>
                  <img
                    src={logo}
                    width={96}
                    className="mx-auto d-block"
                    alt=""
                  />
                  <div className="card-title text-center">
                    <h4 className="mb-4">Login</h4>
                    {showAlert && <Alert />}
                  </div>
                  <Form className="login-form mt-4" onSubmit={onSubmit}>
                    <Row>
                      <Col lg={12}>
                        <FormRow
                          type="text"
                          name="Your Email"
                          value={values.email}
                          handleChange={handleChange}
                          icon="user"
                        />
                      </Col>
                      <Col lg={12}>
                        <FormRow
                          type="text"
                          name="Your Password"
                          value={values.password}
                          handleChange={handleChange}
                          icon="key"
                        />
                      </Col>

                      <Col lg={12}>
                        <div className="d-flex justify-content-between">
                          <div className="mb-3">
                            <div className="form-check">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="flexCheckDefault"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                Remember me
                              </Label>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col lg={12} className="mb-0">
                        <div className="d-grid">
                          <Button type="submit" color="primary">
                            Sign in
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
export default LoginPage;
