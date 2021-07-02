import { Col, Row, Container } from "react-bootstrap";
import Ash from "./images/Ash.jpg";

export default function About() {
  return (
    <div>
      <Container className="col-md-6 section-container">
        <Row>
          <Col>
            <div>
              <img
                src={Ash}
                style={{ width: "80%", borderRadius: "10px", margin: "10%" }}
                alt="Ashrith Yakkali"
              />
            </div>
          </Col>
          <Col>
            <div className="mt-5">
              <h2>Who Am I?</h2>
              <p className="text-light">
                I'm a self-taught amatuer Fullstack Developer aiming to become a
                professional, currently pursuing Integrated MTech SE at VIT -
                Amaravati. As of now, I'm interested in working as a intern.So,
                if you have a offer for me, kindly approach me through the
                contact section.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
