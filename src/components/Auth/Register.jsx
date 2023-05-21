import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
// import { Alert } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../Context/AuthContextProvider";
// import "../Auth/Auth.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const { register } = useAuth();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Заполните поля!");
      return;
    }
    e.preventDefault();
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", confirmPassword);
    register(formData);
  };

  return (
    <div class="header" theme={theme}>
      <div class="container1">
        <form class="form">
          <h1>Register</h1>

          <img
            src="https://i.ibb.co/bvqgKnm/account.png"
            width="120"
            height="120"
          />
          <div class="input">
            <label for="email" id="email_label" class="label">
              Email
            </label>
            <input
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              class="form-input"
              placeholder="Email"
            />
          </div>
          <div class="input">
            <label for="password" id="email_label" class="label">
              Password
            </label>
            <input
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="form-input"
              placeholder="Password"
            />
          </div>
          <div class="input">
            <label
              for="password"
              id="email_label"
              class="label"
              style={{ marginRight: "13px" }}
            >
              Password
            </label>
            <input
              style={{ height: "40px", width: "220px", marginTop: "10px" }}
              margin="normal"
              required
              fullWidth
              name="confirm_password"
              label="Confirm Password"
              type="password"
              id="confirm_password"
              autoComplete="current-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              class="form-input"
              placeholder="Password"
            />
          </div>
          <RouterLink to="/register">
            <Typography style={{ marginBottom: "10px" }}>
              {"Dont' have an account? Sign Un"}
            </Typography>
          </RouterLink>
          <button type="submit" id="submit_button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
      <div style={{ height: "300px" }}></div>
    </div>
  );
}
