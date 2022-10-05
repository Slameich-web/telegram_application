import React from "react";

export const ProjectTemplate = ({ title, description, state, technology }) => {
  return (
    <div className="main_container">
      <h3>{title}</h3>
      <div>{description}</div>
      <div>{state}</div>
      <div>{technology}</div>
    </div>
  );
};
export default ProjectTemplate;
