import React from "react";

export const ProjectTemplate = ({ props }) => {
  console.log(props);
  return (
    <div className="main_container_wrapper">
      {props.map((project) => {
        return (
          <div className="main_container">
            <h3>{project.title}</h3>
            <div>
              <div>{project.description}</div>

              <div>Frontend: {project.technologyFront}</div>
              {project.technologyBack ? (
                <div>Backend: {project.technologyBack}</div>
              ) : null}

              <div>
                <progress
                  className="main_container_progress"
                  value={project.state}
                  max="100"
                />
                {project.state} %
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProjectTemplate;
