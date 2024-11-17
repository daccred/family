"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  icon?: LucideIcon;
}

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