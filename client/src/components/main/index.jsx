import React from "react";
import { ru_linkedIn } from "../../data";

import "./Main.css";
import ProjectTemplate from "./ProjectTemplate";
export const Main = ({ activeArticle }) => {
  const validateArticle = (activeArticle) => {
    if (activeArticle === "pet") {
      return <ProjectTemplate />;
    }
    if (activeArticle === "prod") {
      return <ProjectTemplate {...ru_linkedIn} />;
    }
  };

  return <div>{validateArticle(activeArticle)}</div>;
};
