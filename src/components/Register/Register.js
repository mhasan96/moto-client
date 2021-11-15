import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import login from "../../images/login.png";
import useAuth from "../Hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password Did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);

    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                name="name"
                onBlur={handleOnBlur}
                label="Your Name"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                label="Your Email"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                name="password"
                onBlur={handleOnBlur}
                label="Your Password"
                type="password"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                name="password2"
                onBlur={handleOnBlur}
                label="Confirm Password"
                type="password"
                variant="standard"
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                variant="contained"
                type={"submit"}
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Register? Please Login</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User Created Successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
