import { Container } from "react-bootstrap";
import Ash from "../images/Ash.jpg";
import "./about.css";
export default function About() {
  return (
    <div>
      <Container id="about" className="section-container">
        <div className="d-flex about align-items-center">
          <img src={Ash} alt="Ashrith Yakkali" className="ash" />
          <div className="content-wrapper">
            <h2>Who Am I?</h2>
            <p className="text-light">
              I'm a self-taught amatuer Fullstack Developer aiming to become a
              professional, currently pursuing Integrated MTech SE at VIT -
              Amaravati. I have been learning the way of Webapp Dev for 1 year.
              I have built projects based on MERN stack, JAMstack, EJS, REST
              APIs and so on...
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
