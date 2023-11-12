import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { auth } from "../../api";
import styles from "./style.module.css";
import Header from "../../components/Header";
import SectionHeader from "../../components/SectionHeader";

const Login = () => {
  const navigate = useNavigate();

  const authenticate = localStorage.getItem("auth");

  useEffect(() => {
    if (authenticate) {
      authenticate.roles === "user" ? navigate("/") : navigate("/admin");
    }
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin@duomart.com" && password === "admin123") {
      const auth = {
        token: "tokenadmin",
        roles: "admin",
      };
      localStorage.setItem("auth", JSON.stringify(auth));
      navigate("/admin");
      Swal.fire({
        title: "Login Success",
        icon: "success",
      });
    } else {
      auth({ username, password })
        .then((res) => {
          const auth = {
            token: res.data.token,
            roles: "user",
          };
          localStorage.setItem("auth", JSON.stringify(auth));
          navigate("/");
          Swal.fire({
            title: "Login Success",
            icon: "success",
          });
        })
        .catch((err) => {
          Swal.fire({
            title: "Login Error",
            text: "Username/Password wrong or something wrong",
            icon: "error",
          });
        });
    }
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <Header />
      <SectionHeader title="Login" />
      <Form
        style={{
          width: "100%",
          margin: "2.5rem auto",
          padding: "2rem" /* Menambahkan padding 2 rem */,
          background: "#e0e0e0" /* Menambahkan warna latar belakang */,
          border: "1px solid #a7a6a6",
          borderRadius: "10px" /* Mengatur sudut elemen */,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" /* Menambahkan shadow */,
        }}
        onSubmit={handleLogin}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "bold" }}>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type your username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Type your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <div className={styles.default}>
          <div>
            <span>Default User:</span>
            <span>username = johnd</span>
            <span>password = m38rmF$</span>
          </div>
          <div>
            <span>Default Admin:</span>
            <span>username = admin@duomart.com</span>
            <span>password = admin123</span>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Login;
