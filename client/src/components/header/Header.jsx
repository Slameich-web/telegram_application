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
    <div className="header">
      <Button onClick={onClose}>Закрыть</Button>
      <span className="username">
        Привет
        <strong>` ${user?.username}`</strong>
      </span>
      <h2>Список и описание моих работ</h2>
      <div>
        <Button onClick={() => setState("pet")}>Список pet-проектов</Button>
      </div>
      <div>
        <Button onClick={() => setState("prod")}>Список prod-проектов</Button>
      </div>
      <div>
        <Button onClick={() => setState("chart")}>Диаграмма навыков</Button>
      </div>
      <Main activeArticle={state} />
    </div>
  );
};
