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
import { useAppContext } from '../../../context/appContext.js';
import { useNavigate, Link } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isAdmin: true,
};

const LoginPage = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isAdmin: !values.isAdmin });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, isAdmin, name } = values;
    if (!email || !password || (!isAdmin && !name)) {
      displayAlert();
      return;
    }
    console.log(values);
    const currentUser = { name, email, password };
    if (isAdmin) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    }
  }, [user, navigate]);

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
                  <Form className="login-form mt-4" onSubmit={onSubmit}>
                    <img
                      src={logo}
                      width={96}
                      className="mx-auto d-block"
                      alt=""
                    />
                    <div className="card-title text-center">
                      <h4 className="mb-4">
                        {values.isAdmin ? 'Login' : 'Register'}
                      </h4>
                      {showAlert && <Alert />}
                    </div>

                    <Row>
                      {!values.isAdmin && (
                        <Col lg={12}>
                          <FormRow
                            type="text"
                            name="name"
                            value={values.name}
                            handleChange={handleChange}
                            icon="user"
                          />
                        </Col>
                      )}
                      <Col lg={12}>
                        <FormRow
                          type="email"
                          name="email"
                          value={values.email}
                          handleChange={handleChange}
                          icon="mail"
                        />
                      </Col>
                      <Col lg={12}>
                        <FormRow
                          type="password"
                          name="password"
                          value={values.password}
                          handleChange={handleChange}
                          icon="key"
                        />
                      </Col>
                      <Col lg={12} className="mb-0">
                        <div className="d-grid">
                          <Button
                            type="submit"
                            color="primary"
                            disabled={isLoading}
                          >
                            Submit
                          </Button>
                        </div>
                      </Col>
                      <Col lg={12} className="mt-3">
                        <div className="text-center">
                          {values.isAdmin
                            ? 'Not a member yet'
                            : 'Already a Admin?'}
                          <Button
                            type="button"
                            className="btn mx-3 text-primary"
                            style={{ backgroundColor: `white`, border: `none` }}
                            onClick={toggleMember}
                          >
                            {values.isAdmin ? 'Register' : 'Login'}
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
