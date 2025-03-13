import React from "react";

import cls from "./Button.module.scss";

interface ButtonProps {
  path: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ path, text }) => {
  return (
    <a className={cls.btn} href={path}>
      {text}
    </a>
  );
};

export default Button;
