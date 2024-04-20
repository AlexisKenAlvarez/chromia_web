import { ReactNode, forwardRef } from "react";
import { cn } from "../utils";

interface myProps {
  className?: string;
  children: ReactNode;
  id?: string;
}

const Container = forwardRef<HTMLDivElement, myProps>(
  ({ className, children, id }, ref) => {
    return (
      <section
        className={cn("relative h-auto w-full px-5", className)}
        ref={ref}
        id={id}
      >
        {children}
      </section>
    );
  },
);

export default Container;
