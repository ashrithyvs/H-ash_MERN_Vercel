import React from "react";
import Intro from "./intro";
import Contact from "./contact.jsx";
import SkillsList from "./skillsList";
import About from "./about";
import Extras from "./extras";
import "./App.css";
import ProjectList from "./ProjectList";

function HomeWrapper() {
  return (
    <div
      style={{
        background: "#050505",
        fontFamily: "Montserrat, sans-serif",
        color: "#be9fe1",
      }}
    >
      <Intro />
      <About />
      <Extras />
      <SkillsList />
      <ProjectList />
      {/* <WorkList /> */}
      <Contact />
    </div>
  );
}

export default HomeWrapper;
