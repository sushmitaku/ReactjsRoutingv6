import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    console.log(" from protected cmp", login);
    if (!login) {
      // protect entire software if user is not
      //logged in redirect to login page
      navigate("/login");
    }
  });
  return (
    <>
      <Component />
    </>
  );
};
export default Protected;
