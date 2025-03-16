import React from 'react';

//the project data is an array 
//bootstrap grid system for responsive layout
//bootstrap cards for each project 

const projects = [
    {
      title: "Project 1",
      image: "../../src/assets/images/IMG_0138.jpeg",
      deployedLink: "https://example.com/project1",
      githubLink: "https://github.com/username/project1",
    },
    {
      title: "Project 2",
      image: "image2.jpg", // Placeholder
      deployedLink: "https://example.com/project2",
      githubLink: "https://github.com/username/project2",
    },
    {
      title: "Project 3",
      image: "image3.jpg", // Placeholder
      deployedLink: "https://example.com/project3",
      githubLink: "https://github.com/username/project3",
    },
    {
      title: "Project 4",
      image: "image4.jpg", // Placeholder
      deployedLink: "https://example.com/project4",
      githubLink: "https://github.com/username/project4",
    },
    {
      title: "Project 5",
      image: "image5.jpg", // Placeholder
      deployedLink: "https://example.com/project5",
      githubLink: "https://github.com/username/project5",
    },
    {
      title: "Project 6",
      image: "image6.jpg", // Placeholder
      deployedLink: "https://example.com/project6",
      githubLink: "https://github.com/username/project6",
    },
  ];

  export default function Portfolio() {
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                {/* Link to Deployed App */}
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} className="card-img-top" alt={project.title} />
                </a>
                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>
                  {/* Link to GitHub Repo */}
                  <a
                    href={project.githubLink}
                    className="btn btn-dark"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }