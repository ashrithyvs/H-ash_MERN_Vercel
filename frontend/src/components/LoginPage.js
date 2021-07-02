import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Dashboard from "./Dashboard";

const Profile = () => {
  const [isAuthenticated, setAuthentication] = useState(false);

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  function LoginForm() {
    const [usernameInput, setUsername] = useState("");
    const [passwordInput, setPassword] = useState("");
    const [adminInfo, setAdminInfo] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:5000/admin/getAdminInfo")
        .then((res) => {
          setAdminInfo(res.data);
          console.log("Info recieved");
        })
        .catch((err) => {
          console.log(err);
          if (err.request) {
            console.log(err.request);
          } else if (err.response) {
            console.log(err.response);
          }
        });
    }, []);
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    var adminUsername = "";
    var adminPassword = "";
    // eslint-disable-next-line array-callback-return
    adminInfo.map((admin) => {
      adminUsername = admin.username;
      adminPassword = admin.password;
    });
    const handleSubmit = (event) => {
      if (usernameInput === adminUsername && passwordInput === adminPassword) {
        event.preventDefault();
        event.stopPropagation();
        console.log("Login Successful");
        setAuthentication(true);
      } else {
        console.error("Login Error");
        setAuthentication(false);
      }
    };

    return (
      <div
        className="col-md-6 justify-content-center"
        style={{ padding: "15%" }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              value={usernameInput}
              onChange={handleUsernameChange}
              placeholder="Enter Username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={passwordInput}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="outline-light" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }

  const LogoutButton = () => {
    function handleLogout() {
      setAuthentication(false);
    }
    return (
      <Button onClick={handleLogout} variant="outline-light">
        Logout
      </Button>
    );
  };

  return (
    isAuthenticated && (
      <div
        className="container text-center text-light"
        style={{ paddingTop: "10%" }}
      >
        <Dashboard />
        <LogoutButton />
      </div>
    )
  );
};
export default Profile;
