"use client";

import { Settings, HelpCircle, MessageSquare, FileText, LogOut } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { MetaMaskBg, LedgerIcon, TrustWalletIcon, PhantomIcon, FamilyIcon } from "@/components/ui/icons";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  if (!isOpen) return null;

  const wallets = [
    { name: "Metamask", address: "0x3e2...a7f5", icon: MetaMaskBg },
    { name: "Ledger", address: "0x3e2...a7f5", icon: LedgerIcon },
    { name: "Trust Wallet", address: "0x3e2...a7f5", icon: TrustWalletIcon },
    { name: "Phantom", address: "0x3e2...a7f5", icon: PhantomIcon },
  ];

  const navItems = [
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help Center" },
    { icon: MessageSquare, label: "Contact Us" },
    { icon: FileText, label: "Terms & Privacy Policy" },
    { icon: LogOut, label: "Remove Wallet", destructive: true },
  ];

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />
      <nav className="fixed inset-y-0 left-0 w-[280px] bg-[#0A0B0D] text-white border-r border-gray-800/50 shadow-xl z-50 overflow-y-auto">
        <div className="flex flex-col h-full">
          <div className="flex-1 px-6 pt-6">
            <h2 className="font-sf-pro text-[32px] font-normal text-white mb-3">My Wallet</h2>
            <div className="space-y-2 mb-8">
              {wallets.map((wallet) => (
                <button 
                  key={wallet.name} 
                  className="flex items-center w-full text-left"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-800/50 flex items-center justify-center mr-3 flex-shrink-0">
                    <wallet.icon />
                  </div>
                  <div className="flex flex-row w-full min-w-0">
                    <span className="font-sf-pro text-[15px] text-white font-medium truncate mr-2">
                      {wallet.name}
                    </span>
                    <span className="font-sf-pro text-[13px] text-[#545E69] flex-shrink-0">
                      {wallet.address}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <GradientButton 
              icon={FamilyIcon}
              label="Setup a Family"
              className="w-9/12 mb-10"
            />
            <div className="space-y-6">
              {navItems.map(({ icon: Icon, label, destructive }) => (
                <button
                  key={label}
                  className={`flex items-center space-x-3 w-full ${
                    destructive ? 'text-red-500' : 'text-[#C6CCD2]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-sf-pro text-[15px] font-normal">
                    {label}
                  </span>
                </button>
              ))}
              <div className="flex items-center space-x-2 pt-4">
                <span className="font-sf-pro text-[13px] text-[#545E69]">v2024.44.0</span>
                <span className="bg-[#0278FF] px-2 py-0.5 rounded-[50px] text-[12px] text-white">Beta</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}