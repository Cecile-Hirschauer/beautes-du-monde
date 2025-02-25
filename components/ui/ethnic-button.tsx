import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

interface EthnicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
}

export const EthnicButton = forwardRef<HTMLButtonElement, EthnicButtonProps>(
  (
    { className, variant = "primary", size = "default", children, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          "relative overflow-hidden font-semibold transition-all duration-300 group",
          "before:absolute before:inset-0 before:border-2 before:border-gold before:translate-x-1 before:translate-y-1 before:transition-transform before:duration-300",
          "hover:before:translate-x-0 hover:before:translate-y-0",
          {
            "bg-gold text-background hover:bg-gold/90": variant === "primary",
            "bg-bronze text-background hover:bg-bronze/90":
              variant === "secondary",
            "bg-transparent border-2 border-gold text-gold hover:bg-gold/10":
              variant === "outline",
            "px-4 py-2": size === "default",
            "px-3 py-2 text-sm": size === "sm",
            "px-6 py-3 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

EthnicButton.displayName = "EthnicButton";
