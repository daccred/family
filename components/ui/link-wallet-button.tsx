"use client";

import { ExternalLink } from "lucide-react";

export const LinkWalletButton = () => {
  return (
    <button 
      className="link-wallet-gradient px-4 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity"
    >
      <ExternalLink className="w-4 h-4 text-white" />
      <span className="font-sf-pro text-[14px] font-medium leading-[16.71px] text-white">
        Link Wallet
      </span>
    </button>
  );
}