import React from "react";
import "./Button.css";

export const Button = (props) => {
  const className = `th-button ${props.className ? props.className : ""}`;
  return <button className={className} {...props} />;
};
