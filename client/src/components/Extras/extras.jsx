/* eslint-disable react/jsx-no-target-blank */
import { Button, Container } from "react-bootstrap";
import resume from "../downloadables/resume.pdf";
import "./extras.css";
export default function Extras() {
  const pill = {
    backgroundColor: "#be9fe1",
    padding: "1% 5% ",
    borderRadius: "26px",
    color: "black",
  };
  return (
    <Container className=" d-flex extras justify-content-around">
      <Button
        target="_blank"
        href="https://drive.google.com/drive/folders/1D06ZO3m_7U9l2AIw__603SovafdW5sVm?usp=sharing"
        style={pill}
      >
        Certificates
      </Button>
      <Button href={resume} download style={pill}>
        My Resume
      </Button>
      <Button
        target="_blank"
        href="https://www.github.com/ashrithyvs"
        style={pill}
      >
        Projects
      </Button>
    </Container>
  );
}
