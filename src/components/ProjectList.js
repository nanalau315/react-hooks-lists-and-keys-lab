import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects}) {
  console.log(projects);
  const projectElement = projects.map((p) => 
    <ProjectItem key={p.id} name={p.name} about={p.about} technologies={p.technologies}/>
  )
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {projectElement}  
      </div>
    </div>
  );
}

export default ProjectList;
