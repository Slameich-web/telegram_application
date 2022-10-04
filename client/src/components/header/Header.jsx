import React from "react";
import { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { Button } from "../button/Button";
import { Main } from "../main";
import "./Header.css";
export const Header = () => {
  const { onClose, user } = useTelegram();
  const [state, setState] = useState("");
  return (
    <div className={"header"}>
      <Button onClick={onClose}>Закрыть</Button>
      Привет!
      <span className={"username"}>
        <strong>{user?.username}</strong>
      </span>
      <h1>Добро пожаловать в мое портфолио</h1>
      <div>
        Тут вы сможете найти описание моих пет проектов и ссылки на них{" "}
        <Button onClick={() => setState("pet")}>Закрыть</Button>
      </div>
      <div>
        Также здесь вы сможете узнать над какими коммерческими задачами я
        работал <Button onClick={() => setState("prod")}>Закрыть</Button>
      </div>
      <Main activeArticle={state} />
    </div>
  );
};
