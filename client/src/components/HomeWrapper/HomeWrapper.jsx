import React from "react";
import Intro from "../Intro/intro";
import Contact from "../Contact/contact.jsx";
import SkillsList from "../Skills/SkillList";
import About from "../About/about";
import Extras from "../Extras/extras";
import ProjectList from "../Projects/projectList";
import { Button } from "react-bootstrap";
import upArrow from "../images/up-arrow.svg";

function HomeWrapper() {
  return (
    <div
      style={{
        background: "#050505",
        fontFamily: "Montserrat, sans-serif",
        color: "#be9fe1",
      }}
    >
      <Button className="write-btn" href="#intro" variant="light">
        <img src={upArrow} alt="arrow" />
      </Button>
      <Intro />
      <About />
      <Extras />
      <SkillsList />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default HomeWrapper;
