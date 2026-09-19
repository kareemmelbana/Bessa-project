import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-l from-primary to-primary-strong text-primary-foreground shadow-glow transition-[background-color,box-shadow,transform] duration-200 hover:from-primary-strong hover:to-primary hover:-translate-y-0.5 active:translate-y-0",
        favorite: "rounded-full border border-card-border bg-card/90 text-card-muted shadow-sm backdrop-blur hover:text-favorite data-[state=active]:text-favorite",
        quiet: "border border-border bg-surface text-foreground hover:border-primary hover:text-primary",
        filter: "rounded-full border border-transparent bg-chip px-4 text-chip-foreground shadow-sm hover:bg-chip-hover data-[active=true]:border-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[rare=true]:border-rare-strong/50 data-[rare=true]:hover:bg-rare-soft data-[rare=true]:data-[active=true]:border-rare-strong data-[rare=true]:data-[active=true]:bg-rare data-[rare=true]:data-[active=true]:text-rare-foreground data-[rare=true]:data-[active=true]:shadow-rare data-[rare=true]:data-[active=true]:hover:bg-rare-strong",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
