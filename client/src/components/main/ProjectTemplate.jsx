import React from "react";

export const ProjectTemplate = ({ props }) => {
  console.log(props);
  return (
    <div className="main_container">
      {props.map((project) => {
        return (
          <>
            <h3>{project.title}</h3>
            <div>
              <div>{project.description}</div>

              <div>Frontend: {project.technologyFront}</div>
              <div>Backend: {project.technologyBack}</div>
              <div>
                <progress value={project.state} max="100" />
                {project.state} %
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default ProjectTemplate;
