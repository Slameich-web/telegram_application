export const Main = ({ activeArticle }) => {
  const validateArticle = (activeArticle) => {
    if (activeArticle === "pet") {
      return <div>Пет проекты</div>;
    }
    if (activeArticle === "prod") {
      return <div>Рабочие проекты</div>;
    }
  };

  return <div>{validateArticle(activeArticle)}</div>;
};
