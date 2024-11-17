"use client";

import { FileText, Users, Wallet, Plus } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FamilyPage() {
  const [activeTab, setActiveTab] = useState<'plans' | 'members' | 'budgets'>('plans');

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A0B0D] text-white mx-auto max-w-[432px]">
      <Header />
      
      <div className="pt-16 pb-24">
        <div className="px-4 py-6">
          <h1 className="font-sf-pro text-[32px] font-medium leading-[38.19px] text-white mb-8">
            Family
          </h1>

          <div className="flex gap-2 mb-12">
            <button 
              onClick={() => setActiveTab('plans')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                activeTab === 'plans' 
                  ? "bg-[#14191F] border border-[#192027]" 
                  : "bg-transparent border border-transparent"
              }`}
            >
              <FileText className={`w-4 h-4 ${activeTab === 'plans' ? "text-[#C6CCD2]" : "text-[#545E69]"}`} />
              <span className={`font-sf-pro text-[14px] font-normal leading-[16.71px] ${
                activeTab === 'plans' ? "text-[#C6CCD2]" : "text-[#545E69]"
              }`}>
                Plans
              </span>
            </button>

            <button 
              onClick={() => setActiveTab('members')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                activeTab === 'members' 
                  ? "bg-[#14191F] border border-[#192027]" 
                  : "bg-transparent border border-transparent"
              }`}
            >
              <Users className={`w-4 h-4 ${activeTab === 'members' ? "text-[#C6CCD2]" : "text-[#545E69]"}`} />
              <span className={`font-sf-pro text-[14px] font-normal leading-[16.71px] ${
                activeTab === 'members' ? "text-[#C6CCD2]" : "text-[#545E69]"
              }`}>
                Members
              </span>
            </button>

            <button 
              onClick={() => setActiveTab('budgets')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                activeTab === 'budgets' 
                  ? "bg-[#14191F] border border-[#192027]" 
                  : "bg-transparent border border-transparent"
              }`}
            >
              <Wallet className={`w-4 h-4 ${activeTab === 'budgets' ? "text-[#C6CCD2]" : "text-[#545E69]"}`} />
              <span className={`font-sf-pro text-[14px] font-normal leading-[16.71px] ${
                activeTab === 'budgets' ? "text-[#C6CCD2]" : "text-[#545E69]"
              }`}>
                Budgets
              </span>
            </button>
          </div>

          {activeTab === 'plans' && (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
              <p className="font-sf-pro text-[16px] font-normal leading-[19.09px] text-[#545E69] mb-6">
                No active family plans
              </p>
              
              <div className="flex gap-3">
                <Button variant="primary">Explore Plans</Button>
                <Button variant="secondary">+ Create</Button>
              </div>
            </div>
          )}

          {activeTab === 'members' && (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
              <div className="relative w-[200px] h-[48px] mb-6">
                <img 
                  src="/member-1.png" 
                  alt="Member" 
                  className="absolute left-0 w-12 h-12 rounded-full border-2 border-[#0A0B0D]"
                />
                <img 
                  src="/member-2.png" 
                  alt="Member" 
                  className="absolute left-[30px] w-12 h-12 rounded-full border-2 border-[#0A0B0D]"
                />
                <img 
                  src="/member-3.png" 
                  alt="Member" 
                  className="absolute left-[60px] w-12 h-12 rounded-full border-2 border-[#0A0B0D]"
                />
                <img 
                  src="/member-4.png" 
                  alt="Member" 
                  className="absolute left-[90px] w-12 h-12 rounded-full border-2 border-[#0A0B0D]"
                />
              </div>
              
              <p className="font-sf-pro text-[16px] font-normal leading-[19.09px] text-[#545E69] mb-6">
                No family member invited yet
              </p>
              
              <Button variant="secondary">
                <Plus className="w-4 h-4" />
                Invite
              </Button>
            </div>
          )}

          {activeTab === 'budgets' && (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
              <p className="font-sf-pro text-[16px] font-normal leading-[19.09px] text-[#545E69] mb-6">
                No budgets created
              </p>
              
              <Button variant="secondary">+ Create Budget</Button>
            </div>
          )}
        </div>
      </div>

      <BottomNav activePage="family" />
    </main>
  );
}