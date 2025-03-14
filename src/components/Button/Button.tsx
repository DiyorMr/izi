import React from "react";

import cls from "./Button.module.scss";

interface ButtonProps {
  className: string;
  path: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ className, path, text }) => {
  return (
    <a className={`${cls.btn} ${className || ""}`} href={path}>
      {text}
    </a>
  );
};

export default Button;
