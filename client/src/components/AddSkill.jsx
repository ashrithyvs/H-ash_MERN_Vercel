import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Modal } from "react-bootstrap";

const AddSkill = () => {
  const [newSkill, setNewSkill] = useState({
    skillName: "",
    progress: "",
  });
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseError = () => setShowError(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    axios
      .post("http://localhost:5000/skills/addSkill/", newSkill)
      .then((res) => {
        console.log("Skill Added to DB Successfully");
        setShow(true);
      })
      .catch((err) => {
        if (err.request) {
          console.log(err.request);
        } else if (err.response) {
          console.log(err.response);
        }
        setShowError(true);
      });
  };

  const handleChange = (e) => {
    setNewSkill({ ...newSkill, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Container style={{ padding: "16%" }}>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Skill Name"
              name="skillName"
              value={newSkill.skillName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="number"
              placeholder="Progress"
              name="progress"
              value={newSkill.progress}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="outline-light" type="submit">
            Submit
          </Button>
        </Form>
      </Container>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header className="bg-success" closeButton>
          <Modal.Title>
            <h5 className="text-light">Confirmation alert!</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Skill added to DB successfully</h5>
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
          <h4>Please re-enter details and try again.</h4>
          <br />
          <Button variant="danger" size="sm" onClick={handleCloseError}>
            close
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddSkill;
