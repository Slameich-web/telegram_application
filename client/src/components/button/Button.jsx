import React from "react";
import "./Button.css";

export const Button = (props) => {
  return <button className={`th-button ${props.className}`} {...props} />;
};
