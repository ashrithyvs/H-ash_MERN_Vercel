/* eslint-disable array-callback-return */
import axios from "axios";
import { Component } from "react";
import { Button, Container } from "react-bootstrap";

class SkillsList extends Component {
  constructor(props) {
    super(props);
    this.state = { skillData: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/skills/getSkills")
      .then((res) => {
        this.setState({ skillData: res.data });
        console.log(this.state.skillData);
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
      <div style={{ paddingTop: "5%" }}>
        <h1 className="text-center">My skills!</h1>
        <Container>
          {this.state.skillData.map((skill) => {
            <div className="wrapper mx-auto ">
              <Button>yooo</Button>
              <h5 className="mb-3 d-flex justify-content-center ">
                {skill.skillName}
              </h5>
              <div
                className="progress mb-3"
                style={{ height: "5px", width: "200px" }}
              >
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{ width: `${skill.progress}`, background: "#916dd5" }}
                ></div>
              </div>
            </div>;
          })}
        </Container>
      </div>
    );
  }
}
export default SkillsList;
