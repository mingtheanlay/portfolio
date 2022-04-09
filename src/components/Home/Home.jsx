import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container home-page">
      <h1>
        Hello, <br /> I'm <span> Mingthean LAY </span>
        <br />
        Web Developer
      </h1>
      <h2>Front-End Developer / Software Developer / Web Designer</h2>
      <Link to="/contact" className="flat-button">
        CONTACT ME
      </Link>
    </div>
  );
};

export default Home;
