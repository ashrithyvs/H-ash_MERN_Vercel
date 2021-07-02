import React, { Component } from "react";
import axios from "axios";
import { Container, Card, Button, CardColumns } from "react-bootstrap";
import ReadMore from "./Readmore";

export default class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = { projectData: [] };
  }
  componentDidMount() {
    axios
      .get(`/projects/getProjects`)
      .then((res) => {
        this.setState({ projectData: res.data });
      })
      .catch((err) => {
        if (err.request) {
          console.log(err.request);
        } else if (err.response) {
          console.log(err.response);
        }
      });
  }
  render() {
    return (
      <Container className="pb-3" style={{ paddingTop: "5%" }}>
        <h1 className="text-center mb-5">Projects</h1>
        <CardColumns>
          {this.state.projectData.map((project) => (
            <Card
              bg="dark"
              className="text-light"
              key={project._id}
              style={{ width: "18rem" }}
            >
              <Card.Img
                style={{ maxHeight: "8.25rem" }}
                variant="top"
                src={`http://localhost:5000/${project.photo}`}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  <ReadMore>{project.description}</ReadMore>
                </Card.Text>
                <Button
                  href={project.link}
                  target="_blank"
                  variant="outline-light"
                  rel="noreferrer"
                >
                  Github Repository
                </Button>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </Container>
    );
  }
}
