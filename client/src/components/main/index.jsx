import React from "react";
import { mts_bank_portal, ru_linkedIn } from "../../data";

import "./Main.css";
import ProjectTemplate from "./ProjectTemplate";
export const Main = ({ activeArticle }) => {
  const validateArticle = (activeArticle) => {
    if (activeArticle === "pet") {
      return <ProjectTemplate />;
    }
    if (activeArticle === "prod") {
      return <ProjectTemplate />;
    }
  };

  return <div>{validateArticle(activeArticle)}</div>;
};
