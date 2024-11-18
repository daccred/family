"use client";

import { Header } from "@/components/Header";
// import { BottomNav } from "@/components/BottomNav";
import { Wallet } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { SetupFooter } from "@/components/SetupFooter";

export default function WalletsPage() {
  const { state, authActions } = useAppContext();
  const { user, isInitializing } = state;
  const { openAuthModal, logout } = authActions;

  return (
    <main className="min-h-dvh overflow-x-hidden bg-[#0A0B0D] text-white mx-auto max-w-[432px]">
      <Header />
      {isInitializing ? (
        <>Loading...</>
      ) : !user ? (
        <div className="pt-16 pb-24">
          <div className="px-4 py-6">
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
              <div className="mb-6 p-4 rounded-full bg-gray-800/50">
                <Wallet className="w-8 h-8 text-gray-400" />
              </div>
              
              <h1 className="text-2xl font-medium mb-2">No Wallets Connected</h1>
              <p className="text-gray-400 mb-8">Connect your crypto wallets to get started</p>
              <button onClick={openAuthModal} className="bg-[#1A73E8] hover:bg-blue-600 text-white rounded-[32px] h-[48px] px-8 text-[17px]">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-16 pb-24">
          <div className="px-4 py-6">
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
              <p className="text-gray-400 mb-8">Logged in as <br /><br />
                <span className="font-medium rounded-full border border-white/10 text-white px-3 py-2">
                {user.email ?? "anon"}
                </span>
                </p>
              <button className="bg-[#1A73E8] hover:bg-blue-600 text-white rounded-[32px] h-[48px] px-8 text-[17px]" onClick={logout}>
                Logout
            </button>
            </div>
          </div>
        </div>
      )}
      <SetupFooter activePage="wallet" />
    </main>
  );
}