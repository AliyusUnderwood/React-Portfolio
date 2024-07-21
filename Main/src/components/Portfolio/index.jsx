import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Tactical Tiles',
      description: 'MERN Stack',
      link: "https://tactical-tiles-19d538a6e28a.herokuapp.com/",
      repo: "https://github.com/AliyusUnderwood/Tactical-Tiles"
    },
    {
      name: 'Sport Blog',
      description: 'MVC Stack',
      link: "https://sport-blog-48839df84095.herokuapp.com/",
      repo: "https://github.com/AliyusUnderwood/sport-blog"
    },
    {
      name: 'Redux Store',
      description: 'MERN Stack',
      link: "https://redux-store-e54a98946158.herokuapp.com/",
      repo: "https://github.com/AliyusUnderwood/Redux-Store"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
