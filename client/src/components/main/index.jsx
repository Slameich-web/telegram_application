import React from "react";
import { mts_bank_portal, ru_linkedIn } from "../../data";

import "./Main.css";
import ProjectTemplate from "./ProjectTemplate";
export const Main = ({ activeArticle }) => {
  const validateArticle = (activeArticle) => {
    if (activeArticle === "pet") {
      return <ProjectTemplate props={ru_linkedIn} />;
    }
    if (activeArticle === "prod") {
      return <ProjectTemplate props={mts_bank_portal} />;
    }
  };

  return <div>{validateArticle(activeArticle)}</div>;
};
