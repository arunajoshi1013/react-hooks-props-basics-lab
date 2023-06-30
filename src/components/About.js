import React from "react";
import Links from "./Links";

function About(props) {
  const { bio, github, linkedin, } = props;
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio !== "" && <p>{bio}</p>}
     
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
