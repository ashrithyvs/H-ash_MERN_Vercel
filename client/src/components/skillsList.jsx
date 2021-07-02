import { Container } from "react-bootstrap";
import Skill from "./Skill";
function SkillsList() {
  return (
    <div>
      <section className="section-container">
        <h1 className="text-center">My skills!</h1>
        <Container>
          <div className="mt-5 text-light">
            <ul className="mb-0">
              <div className="row pb-5">
                <Skill name="JavaScript" percent="70%" />
                <Skill name="Node JS" percent="80%" />
                <Skill name="Express" percent="80%" />
              </div>
              <div className="row pb-5">
                <Skill name="React" percent="75%" />
                <Skill name="SQL" percent="60%" />
                <Skill name="Firebase" percent="50%" />
              </div>
              <div className="row pb-5">
                <Skill name="NoSQL" percent="75%" />
                <Skill name="MongoDB" percent="75%" />
                <Skill name="RESTful API" percent="80%" />
              </div>
              <div className="row pb-5">
                <Skill name="HTML" percent="100%" />
                <Skill name="CSS" percent="75%" />
                <Skill name="Java" percent="70%" />
              </div>
              <div className="row pb-5">
                <Skill name="Data Structures" percent="60%" />
              </div>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default SkillsList;
