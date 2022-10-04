import React from "react";

export const Button = (props) => {
  return <button className={`th-button ${props.className}`} {...props} />;
};
