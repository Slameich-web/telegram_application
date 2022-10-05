import React from "react";
import PetProjects from "./petProjects";
import ProdProjects from "./ProdProjects";
import "./Main.css";
export const Main = ({ activeArticle }) => {
  const validateArticle = (activeArticle) => {
    if (activeArticle === "pet") {
      return <PetProjects />;
    }
    if (activeArticle === "prod") {
      return <ProdProjects />;
    }
  };

  return <div>{validateArticle(activeArticle)}</div>;
};
