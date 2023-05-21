import * as React from "react";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import "../Auth/Auth.css";
import { createTheme } from "@mui/material";
import { useAuth } from "../Context/AuthContextProvider";

const theme = createTheme();

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    if (!email.trim() || !password.trim()) {
      alert("Заполните поля!");
      return;
    }

    e.preventDefault();

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    login(formData, email);
  };

  return (
    <div class="header" theme={theme}>
      <div class="container1">
        <form class="form">
          <h1>Login</h1>

          <img
            src="https://i.ibb.co/bvqgKnm/account.png"
            width="120"
            height="120"
          />
          <div className="input">
            <label for="email" id="email_label" className="label">
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
              className="form-input"
              placeholder="Email"
            />
          </div>
          <div className="input">
            <label for="password" id="email_label" className="label">
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
              className="form-input"
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
