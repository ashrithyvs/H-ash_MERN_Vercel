import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Modal } from "react-bootstrap";

const AddProject = () => {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    link: "",
    photo: "",
  });
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseError = () => setShowError(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData();
    formData.append("title", newProject.title);
    formData.append("description", newProject.description);
    formData.append("link", newProject.link);
    formData.append("photo", newProject.photo);

    axios
      .post("https://h-ash-server.herokuapp.com/projects/add/", formData)
      .then((res) => {
        console.log(res);
        console.log("Project Added to DB Successfully");

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
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewProject({ ...newProject, photo: e.target.files[0] });
  };

  return (
    <div>
      <Container style={{ padding: "16%" }}>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={newProject.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Link"
              name="link"
              value={newProject.link}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows="5"
              placeholder="Description"
              name="description"
              value={newProject.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="file"
              accept=".png, .jpg, .jpeg"
              name="photo"
              onChange={handlePhoto}
              custom
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
          <h5>Project added to DB successfully</h5>
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

export default AddProject;
