import React from "react";

const App = () => {
  const portfolioData = {
    name: "Mihir Sen",
    skills: ["Google Cloud Compution", "Java & C++", "Web Development(Mern)"],
    projects: [
      {
        title: "Quiz-App",
        description:
          "The ultimate destination for testing your knowledge and challenging yourself with a variety of quizzes! Our website offers a wide range of topics to choose from, including history, science, literature, pop culture, and many more.",
      },
      {
        title: "You Tube Clone",
        description:
          "We have developed a platform that lets you upload, watch, and share videos with ease. Our website has all the features you love from YouTube, including personalized recommendations, trending videos, and a subscription system.",
      },
      {
        title: "Trip Guide",
        description:
          "Welcome to our Galaxy travel website, your one-stop-shop for all your space travel needs! Our website offers a wide range of travel packages and services that allow you to explore the wonders of our universe in style and comfort.",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
        </div>
        <div className="body">
          <div className="about">
            <h3>
              <u>Description about me:</u>
            </h3>
            <p>
              Hey! I am Mihir Sen and I am pursuing my B.Tech Degree from VIT in
              ECE. I Love to code and make unique things that will change others
              life.
            </p>
          </div>
          <div className="skills">
            <h3>
              <u>Skills:</u>
            </h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3>
              <u>Some Personal Projects: </u>
            </h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
