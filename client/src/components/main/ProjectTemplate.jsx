import React from "react";

export const ProjectTemplate = (props) => {
  return (
    <div className="main_container">
      {props.map((project) => {
        return (
          <>
            <h3>{project.title}</h3>
            <div>{project.description}</div>
            <div>
              <progress value={project.state} max="100">
                {project.state} %
              </progress>
            </div>
            <div>Frontend: {project.technologyFront}</div>
            <div>Backend: {project.technologyBack}</div>
          </>
        );
      })}
    </div>
  );
};
export default ProjectTemplate;
