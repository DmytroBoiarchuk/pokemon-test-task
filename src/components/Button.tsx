import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance: "primary" | "outline" | "text";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
}
const Button = ({ children, appearance, size, className, ...props }: Props) => {
  return (
    <button className={`btn-${appearance} btn-${size} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
