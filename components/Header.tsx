"use client";

import { Bell, Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { MobileNav } from "./MobileNav";
import { MetaMaskHeaderIcon } from "@/components/ui/icons";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Prevent scrolling when nav is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isNavOpen]);

  return (
    <>
      <header className="fixed mx-auto max-w-[432px] top-0 left-0 right-0 bg-[#0A0B0D] z-50 border-b border-gray-800/50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between w-full">
            <button
              onClick={() => setIsNavOpen(true)}
              className="p-2 -ml-2 hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <button className="flex items-center space-x-2 px-3 py-2 bg-gray-800/50 rounded-full">
              <MetaMaskHeaderIcon />
              <span className="text-sm font-medium">MetaMask</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            <button className="p-2 -mr-2 hover:bg-gray-800/50 rounded-lg transition-colors relative">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </>
  );
}