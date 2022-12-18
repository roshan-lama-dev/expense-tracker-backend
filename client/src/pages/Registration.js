import React, { useState } from "react";

import { Container, Form, Button, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomField } from "../components/customField/CustomField";
import { MainLayout } from "../components/mainLayout/MainLayout";
import { postUser } from "../helper/axiosHelper";

const initialState = {
  name: "",
  email: "",
  pin: "",
  confirmPin: "",
};
const Registration = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if ((value && name === "pin") || name === "confirmPin") {
      if (!+value) {
        return alert("Only number Allowed");
      }
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPin, ...rest } = form;
    if (confirmPin !== rest.pin) {
      toast.error("Pin do not Match");
    } else {
      const { status, message } = await postUser(rest);

      toast[status](message);
    }
  };

  const fields = [
    {
      label: "Full Name",
      placeholder: "SAM",
      name: "name",
      required: true,
      value: form.name,
    },
    {
      label: "Email",
      placeholder: "sam@gmail.com",
      name: "email",
      type: "email",
      required: true,
      value: form.email,
    },

    {
      label: "Pin",
      placeholder: "**********",
      name: "pin",
      type: "number",
      required: true,
      max: "9999",
      min: "1000",
      value: form.pin,
    },
    {
      label: "Confirm Pin",
      placeholder: "**********",
      name: "confirmPin",
      type: "number",
      required: true,
      maxLength: "4",
      minLength: "4",
      value: form.confirmPin,
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
                  🐱‍🚀🐱‍🐉 Register to your financial by tracking daily
                  transaction
                </p>
              </div>
            </div>
          </Col>

          <Col className="p-4">
            {" "}
            <div className="form">
              <h2 className="text-center">Register form</h2>
              <Form onSubmit={handleOnSubmit}>
                {fields.map((item, i) => (
                  <CustomField key={i} {...item} onChange={handleOnChange} />
                ))}
                <div className="d-grid">
                  {" "}
                  <Button variant="secondary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>

              <div className="text-end">
                Have an account already?
                <Link to="/" className="nav-link">
                  Login
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      ;
    </MainLayout>
  );
};

export default Registration;
