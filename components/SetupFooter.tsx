"use client";

import { useRouter } from "next/navigation";

interface SetupFooterProps {
  activePage: 'alerts' | 'family' | 'wallet' | 'home';
}

export const SetupFooter = ({ activePage }: SetupFooterProps) => {
  const router = useRouter();

  const handleFamilyClick = () => {
    router.push("/family/list");
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#00070F] mx-auto max-w-[432px] z-50 px-4 py-3">
      <div className="border border-[#192027] rounded-full p-1 flex justify-between bg-transparent">
        <button 
          className={`flex-1 text-center font-medium py-2 px-4 ${
            activePage === 'alerts' 
              ? 'text-[#0278FF] bg-[#0A1017] rounded-full' 
              : 'text-[#545E69]'
          }`}
          onClick={() => router.push("/alerts")}
        >
          Alerts
        </button>
        <button 
          onClick={handleFamilyClick}
          className={`flex-1 text-center font-medium py-2 px-4 ${
            activePage === 'family' 
              ? 'text-[#0278FF] bg-[#0A1017] rounded-full' 
              : 'text-[#545E69]'
          }`}
        >
          Family
        </button>
        <button 
          onClick={() => router.push("/wallets")}
          className={`flex-1 text-center font-medium py-2 px-4 ${
            activePage === 'wallet' 
              ? 'text-[#0278FF] bg-[#0A1017] rounded-full' 
              : 'text-[#545E69]'
          }`}
        >
          Wallet
        </button>
      </div>
    </nav>
  );
};