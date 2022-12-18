import React, { useRef } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { CustomField } from "../components/customField/CustomField";
import { MainLayout } from "../components/mainLayout/MainLayout";
import { loginUser } from "../helper/axiosHelper";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef("");
  const pinRef = useRef("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const loginObj = {
      email: emailRef.current.value,
      pin: pinRef.current.value,
    };

    const { status, message, result } = await loginUser(loginObj);

    toast[status](message);

    console.log(loginObj);
    if (status === "success" && result?._id) {
    }

    sessionStorage.setItem("user", JSON.stringify(result));
    navigate("/dashboard");
  };
  const fields = [
    {
      label: "Email",
      placeholder: "sam@gmail.com",
      name: "email",
      type: "email",
      required: true,
      forwaredRef: emailRef,
    },
    {
      label: "Pin",
      placeholder: "**********",
      name: "pin",
      type: "password",
      required: true,
      minLegnth: "4",
      maxLength: "4",
      forwaredRef: pinRef,
    },
  ];
  return (
    <MainLayout>
      <Container className="mt-5">
        <Row className="login-page shadow-lg">
          <Col className="bg-secondary  rounded d-none d-md-flex direction-column justify-content-center align-items-center ">
            {" "}
            <div className="info bg-secondary text-blue p-2 pt-5 rounded text-center">
              {" "}
              <div className="mt-3">
                {" "}
                <h1>Welcome to our system</h1>
                <p className="mt-2">
                  Login to your financial by tracking daily transaction
                </p>
              </div>
            </div>
          </Col>

          <Col className="p-4">
            {" "}
            <div className="form">
              <h2 className="text-center">Login form</h2>
              <Form onSubmit={handleOnSubmit}>
                {fields.map((item, i) => (
                  <CustomField key={i} {...item} />
                ))}
                <div className="d-grid">
                  {" "}
                  <Button variant="secondary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
              <div className="text-end">
                Don't have an account?
                <Link to="/register"> Register</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      ;
    </MainLayout>
  );
};

export default Login;
