import React from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { Button } from "../button/Button";
export const TG = window.Telegram.WebApp;

export const Header = () => {
  const { onClose, user } = useTelegram();
  return (
    <div className={"header"}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={"username"}>{user.username}</span>
    </div>
  );
};
