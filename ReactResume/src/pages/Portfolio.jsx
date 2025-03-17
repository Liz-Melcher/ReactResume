import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css"; 


// Project data is an array
// project.map displays the data from each project 
// image: require() so images load correctly when the app is built 


const projects = [
    {
      title: "Surf Report",
      image: ("../../assets/images/IMG_0138.jpeg"),
      deployedLink: "https://example.com/project1",
      githubLink: "https://github.com/username/project1",
    },
    {
      title: "Start Building Habits",
      image: ("../../assets/images/IMG_0544.jpeg"),
      deployedLink: "https://example.com/project2",
      githubLink: "https://github.com/username/project2",
    },
    {
      title: "Car Project",
      image: ("../../assets/images/IMG_0566.jpeg"),
      deployedLink: "https://example.com/project3",
      githubLink: "https://github.com/username/project3",
    },
    {
      title: "Beach Project",
      image: ("../../assets/images/IMG_0712.jpeg"),
      deployedLink: "https://example.com/project4",
      githubLink: "https://github.com/username/project4",
    },
    {
      title: "Red Lights Project",
      image: ("../../assets/images/IMG_2423.jpeg"), 
      deployedLink: "https://example.com/project5",
      githubLink: "https://github.com/username/project5",
    },
    {
      title: "Flower Project",
      image: ("../../assets/images/IMG_9742.jpeg"), 
      deployedLink: "https://example.com/project6",
      githubLink: "https://github.com/username/project6",
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
