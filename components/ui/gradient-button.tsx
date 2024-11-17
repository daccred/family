"use client";

import { LucideIcon } from "lucide-react";

interface GradientButtonProps {
  icon: LucideIcon;
  label: string;
  className?: string;
}

export const GradientButton = ({ icon: Icon, label, className = "" }: GradientButtonProps) => {
  return (
    <button
      className={`flex items-center gap-2 bg-[#0278FF] hover:bg-blue-600 text-white rounded-[32px] h-[48px] px-4 text-[17px] transition-colors ${className}`}
    >
      <Icon className="w-4 h-4" /> {/* Reduced from default size to 16x16px */}
      <span>{label}</span>
    </button>
  );
};