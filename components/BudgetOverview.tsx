"use client";

import { Eye, ExternalLink } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { ProgressBar } from "@/components/ui/progress-bar";

export const BudgetOverview = () => {
  const spent = 1454.26;
  const limit = 1600.00;

  return (
    <section className="w-full max-w-full px-4 py-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-[16px] font-normal leading-[19.09px] text-[#545E69]">My Budget</h2>
        <Eye className="w-5 h-5 text-[#545E69]" />
      </div>

      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-[24px] font-medium leading-[28.64px] text-[#C6CCD2] tracking-tight">$5,000,000</h1>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="font-sf-pro text-[14px] font-normal leading-[16.71px] text-[#28A745]">
              ▲ $100.00 (12.00%)
            </span>
            <span className="font-sf-pro text-[14px] font-normal leading-[16.71px] text-[#545E69]">
              Today
            </span>
          </div>
        </div>
        <GradientButton 
          icon={ExternalLink}
          label="Link Wallet"
        />
      </div>

      <div className="flex flex-wrap justify-between gap-4 mb-6">
        <div>
          <p className="font-sf-pro text-[14px] font-normal leading-[16.71px] text-[#545E69]">Spent</p>
          <p className="font-sf-pro text-[16px] font-medium leading-[19.09px] text-[#C6CCD2]">${spent.toFixed(2)}</p>
        </div>
        <div className="text-right">
          <p className="font-sf-pro text-[14px] font-normal leading-[16.71px] text-[#545E69]">Limit</p>
          <p className="font-sf-pro text-[16px] font-medium leading-[19.09px] text-[#C6CCD2]">
            ${limit.toFixed(2)}
            <span className="font-sf-pro text-[14px] font-normal leading-[16.71px] text-[#545E69] ml-1">
              per month
            </span>
          </p>
        </div>
      </div>

      <ProgressBar 
        value={spent} 
        max={limit} 
        className="mb-8"
      />

      <div className="flex justify-between w-full gap-[10px]">
        {["1D", "1W", "1M", "3M", "1Y"].map((period) => (
          <button
            key={period}
            className={`w-[35px] h-[34px] rounded-8 font-sf-pro text-[12px] font-normal leading-[14.32px] flex items-center justify-center ${
              period === "1W"
                ? "bg-[#545E69] text-[#C6CCD2]"
                : "text-[#545E69] hover:bg-[#545E69]/10"
            }`}
          >
            {period}
          </button>
        ))}
      </div>
    </section>
  );
}