import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Col, Container, Modal } from "react-bootstrap";
import emailjs from "emailjs-com";

function Contact() {
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseError = () => setShowError(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setShowError(true);
    } else {
      sendEmail(event);
      setValidated(true);
      setShow(true);
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1jv66md",
        "h-ash",
        e.target,
        "user_04NgBa6OrljmYyYztWVK5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <Container className="section-container" style={{ padding: "5%" }}>
        <h1 className="text-center mb-5">Want to Ping me?</h1>
        <div className="d-flex justify-content-center">
          <Form
            noValidate
            validated={validated}
            onSubmit={(event) => handleSubmit(event)}
            style={{ width: "70%" }}
          >
            <Form.Group>
              <Form.Label>Enter your Name</Form.Label>
              <Form.Row className="form-row">
                <Col>
                  <Form.Control
                    required
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                  />
                  <Form.Control.Feedback className="text-light">
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback className="text-light" type="invalid">
                    Enter your First name.
                  </Form.Control.Feedback>
                </Col>
                <Col>
                  <Form.Control
                    required
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                  />
                  <Form.Control.Feedback className="text-light">
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback className="text-light" type="invalid">
                    Enter your Last name.
                  </Form.Control.Feedback>
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Form.Label>Enter your Email Adress</Form.Label>
                  <Form.Control
                    required
                    name="email"
                    type="email"
                    placeholder="Your Email Address"
                  />
                  <Form.Control.Feedback className="text-light" type="invalid">
                    Enter your vaild Email ID.
                  </Form.Control.Feedback>
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Form.Label>Enter your Phone Number</Form.Label>
                  <Form.Control
                    required
                    name="telephone"
                    type="tel"
                    placeholder="Your Phone Number"
                  />
                  <Form.Control.Feedback className="text-light" type="invalid">
                    Enter your vaild Phone Number.
                  </Form.Control.Feedback>
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    required
                    rows={5}
                    placeholder="Enter your Message here"
                  />
                </Col>
                <Form.Control.Feedback className="text-light" type="invalid">
                  Enter your Message.
                </Form.Control.Feedback>
              </Form.Row>
            </Form.Group>
            <div className="d-flex justify-content-center mt-5">
              <Button variant="outline-light" type="submit" value="Send">
                Submit
              </Button>

              <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header className="bg-success" closeButton>
                  <Modal.Title>
                    <h5 className="text-light">Confirmation alert!</h5>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5>
                    Your message is sent successfully! Kindly check the
                    confirmation mail sent to you ;)
                  </h5>
                  <Button variant="success" size="sm" onClick={handleClose}>
                    close
                  </Button>
                </Modal.Body>
              </Modal>
              <Modal show={showError} onHide={handleCloseError} size="lg">
                <Modal.Header className="bg-danger" closeButton>
                  <Modal.Title>
                    <h5 className="text-light">Error!</h5>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>Please re-enter your details and try again.</h4>
                  <br />
                  <Button variant="danger" size="sm" onClick={handleCloseError}>
                    close
                  </Button>
                </Modal.Body>
              </Modal>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
}
export default Contact;
