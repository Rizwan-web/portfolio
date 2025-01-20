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
      className={`border border-emerald-500 button-base rounded-lg text-base font-[1100] py-3 px-6 
        ${ className === 'bgButton' ? 'text-slate-50 hover:bg-emerald-700 hover:border-emerald-700 bg-emerald-500' 
          : 'text-slate-50 hover:bg-white hover:text-black border border-white'
        }`
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
