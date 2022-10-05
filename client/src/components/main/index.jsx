import { PetProjects } from "./PetProjects";
import { ProdProjects } from "./ProdProjects";

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
