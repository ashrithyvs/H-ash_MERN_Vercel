import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, Button, CardColumns } from "react-bootstrap";
import ReadMore from "./Readmore";
import "./Projects.css";

export default function ProjectList() {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    axios
      .get("https://h-ash-server.herokuapp.com/projects")
      .then((res) => {
        setProjectData(res.data);
      })
      .catch((err) => {
        if (err.request) {
          console.log(err.request);
        } else if (err.response) {
          console.log(err.response);
        }
      });
  }, [projectData]);
  return (
    <Container
      className="pb-3 text-center project-container"
      style={{ paddingTop: "5%" }}
    >
      <h1 class="text-center pb-5">My Projects</h1>
      <CardColumns>
        {projectData.map((project) => (
          <Card
            bg="dark"
            className="text-light project mx-1"
            key={project.id}
            style={{ width: "18rem" }}
          >
            <Card.Img
              style={{ maxHeight: "8.25rem" }}
              variant="top"
              src={`${project.photo}`}
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
