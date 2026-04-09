import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 text-sm font-semibold transition-all duration-200 will-change-transform disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 active:translate-y-[1px]",
  {
    variants: {
      variant: {
        default:
          "border-[#12263f] bg-[#FF6B35] text-white shadow-[4px_4px_0_0_#12263f] hover:-translate-y-0.5 hover:bg-[#ff7b4a] hover:shadow-[6px_6px_0_0_#12263f] active:translate-y-0 active:shadow-[2px_2px_0_0_#12263f]",
        destructive:
          "border-[#7a1e1e] bg-destructive text-white shadow-[4px_4px_0_0_#7a1e1e] hover:-translate-y-0.5 hover:bg-destructive/90 hover:shadow-[6px_6px_0_0_#7a1e1e] active:translate-y-0 active:shadow-[2px_2px_0_0_#7a1e1e] focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border-[#1E3A5F] bg-background text-foreground shadow-[4px_4px_0_0_rgba(30,58,95,0.35)] hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground hover:shadow-[6px_6px_0_0_rgba(30,58,95,0.45)] active:translate-y-0 active:shadow-[2px_2px_0_0_rgba(30,58,95,0.45)] dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "border-[#374151] bg-secondary text-secondary-foreground shadow-[4px_4px_0_0_rgba(55,65,81,0.4)] hover:-translate-y-0.5 hover:bg-secondary/80 hover:shadow-[6px_6px_0_0_rgba(55,65,81,0.45)] active:translate-y-0 active:shadow-[2px_2px_0_0_rgba(55,65,81,0.45)]",
        ghost:
          "border-transparent bg-transparent text-foreground shadow-none hover:border-[#1E3A5F]/40 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "border-transparent bg-transparent p-0 text-primary shadow-none underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const childCount = React.Children.count(children);
  const hasSingleElementChild =
    childCount === 1 && React.isValidElement(children);

  if (asChild && hasSingleElementChild) {
    return (
      <Slot
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Slot>
    );
  }

  // Prevent runtime crashes when asChild is used with non-element or multi-node children.
  if (asChild && !hasSingleElementChild) {
    return (
      <button
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button, buttonVariants };
