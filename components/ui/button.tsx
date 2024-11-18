"use client";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  icon?: LucideIcon;
}

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
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
  }
)

export const Button = ({
  children,
  variant = "primary",
  className,
  onClick,
  icon: Icon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2 px-6 py-2 rounded-full font-sf-pro text-[14px] font-medium leading-[16.71px]",
        {
          "bg-[#00070F] text-[#0278FF] border border-[#192027]": variant === "primary",
          "bg-[#14191F] text-[#C6CCD2] border border-[#192027]": variant === "secondary",
        },
        className
      )}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};