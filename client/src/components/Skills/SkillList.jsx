import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./Skills.css";

export default function SkillsList() {
  const [skillData, setSkillData] = useState([]);
  useEffect(() => {
    axios
      .get("https://h-ash-server.herokuapp.com/skills/getSkills")
      .then((res) => {
        setSkillData(res.data);
      })
      .catch((err) => {
        if (err.request) {
          console.log(err.request);
        } else if (err.response) {
          console.log(err.response);
        }
      });
  }, [skillData]);
  return (
    <>
      <Container className="section-container skill-container text-center">
        <h1>My skills!</h1>
        <div className="d-flex skills-wrapper text-light">
          {skillData.map((skill) => {
            return (
              <div
                key={skill.id}
                className="d-flex skill flex-column mx-auto my-4"
              >
                <h5 className="mb-3">{skill.skillName}</h5>
                <div
                  className="progress mx-auto mb-3"
                  style={{ height: "5px", width: "200px" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${skill.progress}%`,
                      background: "#916dd5",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
