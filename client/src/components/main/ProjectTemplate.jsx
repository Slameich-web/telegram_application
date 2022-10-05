import React from "react";

export const ProjectTemplate = ({
  title,
  description,
  state,
  technologyFront,
  technologyBack,
}) => {
  return (
    <div className="main_container">
      <h3>{title}</h3>
      <div>{description}</div>
      <div>{state}</div>
      <div>Frontend: {technologyFront}</div>
      <div>Backend: {technologyBack}</div>
    </div>
  );
};
export default ProjectTemplate;
