import React from "react";
import { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { Button } from "../button/Button";
import { Main } from "../main";
import "./Header.css";
export const Header = () => {
  const { user } = useTelegram();
  const [activeArticle, setActiveArticle] = useState("");
  return (
    <div className="header">
      <span className="username">
        Привет <strong>{user?.username}</strong>
      </span>
      <h2>Список и описание моих работ</h2>
      <div className="button_container">
        <div className="button_wrapper">
          <Button onClick={() => setActiveArticle("pet")}>
            Список pet-проектов
          </Button>
        </div>
        <div className="button_wrapper">
          <Button onClick={() => setActiveArticle("prod")}>
            Список prod-проектов
          </Button>
        </div>
      </div>

      <Main activeArticle={activeArticle} />
    </div>
  );
};
