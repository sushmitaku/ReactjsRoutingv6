import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  console.log("renders again");
  const navigate = useNavigate();
  const visit = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };
  useEffect(() => {
    localStorage.removeItem("login");
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });
  return (
    <>
      <h1>Login Page </h1>
      <input placeholder="UserName" />
      <input placeholder="Password" />
      <button onClick={visit}>submit</button>
    </>
  );
};
export default Login;
