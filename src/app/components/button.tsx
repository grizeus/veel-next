import clsx from "clsx";
import { ReactNode } from "react";

export interface ButtonProps {
  selected?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({
  selected = false,
  type = "button",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      {...rest}
      className={clsx(
        "inline-flex min-w-15 cursor-pointer items-center justify-center rounded bg-gray-300 px-3 py-2 text-inherit transition-colors duration-300 ease-in-out hover:bg-sky-700 hover:text-white focus:bg-sky-700 focus:text-white focus:outline-none active:bg-sky-800",
        selected && "bg-sky-600 text-white"
      )}>
      {children}
    </button>
  );
};

export default Button;
