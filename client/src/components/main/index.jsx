import React from "react";
import PetProjects from "./petProjects";
import ProdProjects from "./ProdProjects";

export const Main = ({ activeArticle }) => {
  const validateArticle = (activeArticle) => {
    if (activeArticle === "pet") {
      return (
        <div>
          <PetProjects />
        </div>
      );
    }
    if (activeArticle === "prod") {
      return (
        <div>
          <ProdProjects />
        </div>
      );
    }
  };

  return <div>{validateArticle(activeArticle)}</div>;
};
