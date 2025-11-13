import React from "react";
   import image from "../images/design-desk.jpeg";
   const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Authentication_system",
    description:
      "The authentication system is a frontend module built using React that manages user registration, login, and session handling. It allows users to securely create accounts, sign in, and access protected areas of the application.",
    url: "https://github.com/narayankumarpandey-git/Authentication",
  },
  {
    title: "My_Portfolio",
    description:
      "I created a personal portfolio website using React.js to highlight my skills, projects, and professional journey in a modern and engaging way. The site is fully responsive, adapting smoothly to desktop, tablet, and mobile devices. Built with reusable React components, it features a clean navigation bar, interactive project cards,",
    url: "https://github.com/narayankumarpandey-git/My-Portfolio",
  },
  {
    title: "Cuisine_web",
    description:
      "The Cuisine Web project is a responsive, front-end website that showcases diverse cuisines from around the world, built with HTML, CSS, and JavaScript. The homepage features a bold hero section and a grid of cuisine cards (e.g., Italian, Indian, Japanese, Mexican, Mediterranean), each with an image, short intro, and quick actions. Users can search.",
    url: "https://github.com/narayankumarpandey-git/Cuisine-web",
  },
  {
    title: "NetflixUI",
    description:
      "The Netflix User Interface (UI) is designed to provide an engaging and seamless streaming experience with a focus on simplicity, visual appeal, and personalization. Its primary goal is to allow users to browse and watch content effortlessly across devices such as desktops, tablets, TVs.",
    url: "https://github.com/narayankumarpandey-git/NetflixUI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
