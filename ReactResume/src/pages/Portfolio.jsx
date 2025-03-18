// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css"; 
import img1 from "../assets/images/IMG_0138.jpeg";
import img2 from "../assets/images/IMG_0544.jpeg";
import img3 from "../assets/images/IMG_0566.jpeg";
import img4 from "../assets/images/IMG_0712.jpeg";
import img5 from "../assets/images/IMG_2423.jpeg";
import img6 from "../assets/images/IMG_9742.jpeg";

//relative file paths do not work for react; the images have to be imported or in a public folder
// Project data is an array
// project.map displays the data from each project 


const projects = [
    {
      title: "React Resume Project",
      image: img1,
      deployedLink: "https://example.com/project1",
      githubLink: "https://github.com/Liz-Melcher/ReactResume",
    },
    {
      title: "Server and API Challenge",
      image: img2,
      deployedLink: "https://serversandapichallengelizmelcher.onrender.com/",
      githubLink: "https://github.com/Liz-Melcher/ServersAndAPIChallenge",
    },
    {
      title: "Car Project",
      image: img3,
      deployedLink: "https://youtu.be/ZrOsvzv63k8?si=m9-n3s-zCS82wrxy",
      githubLink: "https://github.com/Liz-Melcher/VehcileBuilder",
    },
    {
      title: "CLI Read Me Generator",
      image: img4,
      deployedLink: "https://youtu.be/by7-iBvAhJU",
      githubLink: "https://github.com/Liz-Melcher/nodeJsChallenge",
    },
    {
      title: "Happy Tracker",
      image: img5, 
      deployedLink: "https://liz-melcher.github.io/HappyTracker/",
      githubLink: "https://github.com/Liz-Melcher/HappyTracker",
    },
    {
      title: "SQL Practice",
      image: img6, 
      deployedLink: "https://youtu.be/Iu6Rp0INNeE",
      githubLink: "https://github.com/Liz-Melcher/Unit10SQLChallenge",
    },
];

//bootstrap styling and icons
//bootstrap cards for mobile 
//bootstrap github icon for repositories 


export default function Portfolio() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                <img src={project.image} className="card-img-top" alt={project.title} />
              </a>
              <div className="card-body text-center">
                <h5 className="card-title">{project.title}</h5>
                <a
                  href={project.githubLink}
                  className="btn btn-dark d-flex align-items-center justify-content-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i> GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
