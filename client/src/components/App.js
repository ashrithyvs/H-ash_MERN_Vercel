import React from "react";
import Footer from "./footer";
import Contact from "./contact.jsx";
import About from "./about";
import "./App.css";
import LoginPage from "./LoginPage";
import HomeWrapper from "./HomeWrapper";
import { NavbarBrand, Navbar, Nav, Button } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Education from "./education";
import SkillsList from "./skillsList";
import ProjectList from "./ProjectList";

function App() {
  return (
    <Router>
      <div
        style={{
          background: "#050505",
          fontFamily: "Montserrat, sans-serif",
          color: "#be9fe1",
        }}
      >
        <Navbar
          fixed="top"
          style={{
            background: "rgb(5,5,5,0.7)",
            fontFamily: "Exo, sans-serif",
          }}
          variant="dark"
          expand="lg"
        >
          <Link to="/">
            <NavbarBrand
              className="mr-4 col-3"
              style={{
                fontWeight: 300,
                fontSize: "40px",
                letterSpacing: "5px",
              }}
            >
              Ashrith Yakkali
            </NavbarBrand>
          </Link>
          <NavbarToggle />
          <NavbarCollapse>
            <Nav className="col-md-12 justify-content-end">
              <Link to="/about">
                <Button
                  id="about"
                  className="mx-2"
                  variant="outline-light"
                  style={{ border: "0px" }}
                >
                  About
                </Button>
              </Link>
              <Link to="/skills">
                <Button
                  className="mx-2"
                  variant="outline-light"
                  style={{ border: "0px" }}
                >
                  Skills
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  className="mx-2"
                  variant="outline-light"
                  style={{ border: "0px" }}
                >
                  Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  className="mx-2"
                  variant="outline-light"
                  style={{ border: "0px" }}
                >
                  Contact
                </Button>
              </Link>
            </Nav>
          </NavbarCollapse>
        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
            <Education />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/skills">
            <SkillsList />
          </Route>
          <Route path="/projects">
            <ProjectList />
          </Route>
          <Route path="/adminLogin">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomeWrapper />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
