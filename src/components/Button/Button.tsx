import { FC } from "react";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  style?: string;
}

const Button: FC<ButtonProps> = ({ label, onClick, style }) => {
  return (
    <button className={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
