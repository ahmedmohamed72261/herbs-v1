import * as React from "react";
import { cn } from "@/src/shared/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-sans font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background dark:ring-offset-dark-background",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md dark:bg-dark-primary dark:text-dark-primary-foreground dark:hover:bg-dark-primary/90": variant === "primary",
            "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm hover:shadow-md": variant === "secondary",
            "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:shadow-md": variant === "accent",
            "border border-outline-variant/30 dark:border-dark-outline-variant/30 bg-transparent hover:bg-accent/5 text-foreground dark:text-dark-foreground hover:border-accent/40 dark:hover:border-accent/50": variant === "outline",
            "bg-transparent hover:bg-accent/5 text-foreground dark:text-dark-foreground": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-8 text-base": size === "md",
            "h-14 px-10 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
