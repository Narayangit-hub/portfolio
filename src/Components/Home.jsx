import React from "react";


import PropTypes from "prop-types";


const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src="mypic.jpg" alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>NARAYAN KUMAR PANDEY</h1>
        <h2>Web developer</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src="" style={{ height: "3rem", width: "3rem" }} alt="" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
