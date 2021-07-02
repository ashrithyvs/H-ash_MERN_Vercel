import { Tabs, Tab } from "react-bootstrap";
import AddProject from "./AddProject";
import AddSkill from "./AddSkill";

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
