import React from "react";
import { useParams } from "react-router-dom";
const About = () => {
  const { userId } = useParams();
  return (
    <>
      <div>About component{userId} </div>
    </>
  );
};
export default About;
