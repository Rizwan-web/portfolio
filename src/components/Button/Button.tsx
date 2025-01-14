import { FC, CSSProperties } from "react";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  style?: CSSProperties; // Allow passing custom inline styles
  className?: string;    // Allow custom class names
}

const Button: FC<ButtonProps> = ({ label = "Click Me", onClick, style, className }) => {
  return (
    <button 
      style={style} 
      className={`button-base rounded-lg text-base font-[1100] py-3 px-6 ${className}`} 
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
