import React from "react";
import { Button } from "../button/Button";
export const TG = window.Telegram.WebApp;

export const Header = () => {
  const onClose = () => {
    TG.close();
  };
  return (
    <div className={"header"}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={"username"}>{TG.initDataUnsafe?.user?.username}</span>
    </div>
  );
};
