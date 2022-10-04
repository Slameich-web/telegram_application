import React from "react";
import "./BUtton.css";

export const Button = (props) => {
  return <button className={`th-button ${props.className}`} {...props} />;
};
