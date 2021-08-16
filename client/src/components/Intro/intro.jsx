import { Button, Container } from "react-bootstrap";

function Intro() {
  return (
    <Container
      className="Intro d-flex align-items-center justify-content-center"
      id="intro"
      style={{ minHeight: "90vh" }}
    >
      <div className="text-center text-light">
        <span className="lead">Hey! I'm</span>
        <h1 className="intro-heading">Ashrith Yakkali</h1>
        <Button
          variant="outline-light m-2"
          href="#about"
          size="sm"
          class="lead d-block text-white"
        >
          Want to know me?
        </Button>
      </div>
    </Container>
  );
}

export default Intro;
