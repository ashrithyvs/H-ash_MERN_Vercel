import { Button, Container } from "react-bootstrap";

function Intro() {
  return (
    <section className="Intro" id="home" style={{ minHeight: "90vh" }}>
      <Container
        className="text-center text-light"
        style={{ paddingTop: "15%" }}
      >
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
      </Container>
    </section>
  );
}

export default Intro;
