import { Tabs, Tab } from "react-bootstrap";
import AddProject from "../Projects/AddProject";
import AddSkill from "../Skills/AddSkill";

export default function Dashboard() {
  return (
    <Tabs defaultActiveKey="addProject">
      <Tab eventKey="addProject" title="Add Project">
        <AddProject />
      </Tab>
      <Tab eventKey="skills" title="Add Skill">
        <AddSkill />
      </Tab>
    </Tabs>
  );
}
