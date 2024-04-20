import { FunctionComponent, ReactNode } from "react";
import { cn } from "../utils";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  className?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,

  ...props
}) => {
  return (
    <button
      className={cn(
        "px-6 py-3 relative border opacity-60 font-primary text-center text-sm rounded-sm hover:bg-grn transition-all ease-in-out duration-300 hover:opacity-100 hover:text-bl hover:border-grn hover:font-bold",
        className
      )}
      {...props}
    >
      <h1 className="">{children}</h1>
    </button>
  );
};

export default Button;
