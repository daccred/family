"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Settings, X, Plus, Link2, Home, GraduationCap, UserCircle2, Copy } from "lucide-react";
import { SetupFooter } from "@/components/SetupFooter";
import { useFamily } from "@/context/FamilyContext";
import { BudgetItem } from "@/components/ui/budget-item";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetHeader
} from "@/components/ui/sheet";

interface Request {
  id: number;
  name: string;
  avatar: string;
  purpose: string;
  amount: string;
  status: string;
  icon: any;
}

interface Budget {
  name: string;
  amount: string;
  progress?: number;
}

const requests = [
  {
    id: 1,
    name: "Andrew John",
    avatar: "👩‍🦰",
    purpose: "House Rent",
    amount: "$500,000",
    status: "Requested",
    icon: Home,
  },
  {
    id: 2,
    name: "Andrew John",
    avatar: "👩",
    purpose: "Graduation",
    amount: "$500,000",
    status: "Requested",
    icon: GraduationCap,
  },
  {
    id: 3,
    name: "Andrew John",
    avatar: "👩‍🦰",
    purpose: "House Rent",
    amount: "$500,000",
    status: "Requested",
    icon: Home,
  },
  {
    id: 4,
    name: "Andrew John",
    avatar: "👨‍🦰",
    purpose: "House Rent",
    amount: "$500,000",
    status: "Requested",
    icon: Home,
  },
];

const budgetCategories = [
  { name: "Rent", icon: "⚙️" },
  { name: "Grocery", icon: "❓" },
  { name: "Utilities", icon: "💻" },
  { name: "Logistics", icon: "📋" },
  { name: "Transport", icon: "➡️" },
  { name: "Medical", icon: "➡️" },
  { name: "Housing", icon: "➡️" },
  { name: "Data", icon: "➡️" },
  { name: "Gadgets", icon: "➡️" },
  { name: "Airtime", icon: "➡️" },
  { name: "Miscellaneous", icon: "➡️" },
  { name: "School", icon: "➡️" },
  { name: "Other", icon: "➡️" }
];

export default function FamilyDashboardPage() {
  const [isBudgetExplorerOpen, setIsBudgetExplorerOpen] = useState(false);
  const [isFamilyOpen, setIsFamilyOpen] = useState(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [selectedBudgets, setSelectedBudgets] = useState<string[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [activeTab, setActiveTab] = useState<'requests' | 'budgets' | 'members'>('requests');
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [members, setMembers] = useState<Array<{ id: number; name: string; avatar: string; role: string }>>([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const familyName = searchParams.get('name');
  const familyIcon = searchParams.get('icon');
  const { families } = useFamily();
  const currentFamily = families.find(f => f.name === familyName);

  const handleBack = () => {
    router.back();
  };

  const handleSetupFamily = () => {
    router.push("/family/create");
    setIsFamilyOpen(false);
  };

  const handleRequestClick = (request: Request) => {
    setSelectedRequest(request);
    setIsRequestOpen(true);
  };

  const handleInviteByEmail = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email invitation logic here
    setInviteEmail("");
    setIsInviteOpen(false);
  };

  const toggleBudgetCategory = (category: string) => {
    setSelectedBudgets(prev => {
      const newSelection = prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category];
      
      const newBudgets = newSelection.map(name => ({
        name,
        amount: "10",
        progress: 0
      }));
      
      setBudgets(newBudgets);
      return newSelection;
    });
  };

  return (
    <main className="min-h-screen mx-auto max-w-[432px] overflow-x-hidden bg-[#00070F] text-white">
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <button onClick={handleBack} className="p-2">
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{familyIcon}</span>
            <h1 className="font-sf-pro text-[24px] font-medium text-white">
              {familyName}&apos;s family
            </h1>
            <button 
              onClick={() => setIsFamilyOpen(true)}
              className="p-2 rounded-full bg-[#14191F]"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <button className="p-2">
            <Settings className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {['requests', 'budgets', 'members'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`px-6 py-2 rounded-full ${
                activeTab === tab 
                  ? 'bg-[#14191F] text-white' 
                  : 'text-[#545E69]'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'requests' && (
          <div className="space-y-0 -mx-4">
            {requests.map((request, index) => (
              <button
                key={request.id}
                onClick={() => handleRequestClick(request)}
                className={`w-full p-4 flex items-center justify-between ${
                  index === requests.length - 1 ? '' : 'border-b border-[#192027]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-[#1C1D20] flex items-center justify-center">
                      <span className="text-2xl">{request.avatar}</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#1C1D20] flex items-center justify-center">
                      <request.icon className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-white">{request.name}</p>
                    <p className="text-sm text-[#545E69]">{request.purpose}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#545E69]">{request.status}</p>
                  <p className="font-medium text-white">{request.amount}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'budgets' && (
          <div>
            {budgets.length > 0 ? (
              <div className="space-y-4">
                {budgets.map((budget) => (
                  <BudgetItem
                    key={budget.name}
                    name={budget.name}
                    amount={budget.amount}
                    progress={budget.progress}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                <p className="font-sf-pro text-[16px] font-normal leading-[19.09px] text-[#545E69] mb-6">
                  Hey we created these budgets to spend limits for you
                </p>
                <button
                  onClick={() => setIsBudgetExplorerOpen(true)}
                  className="font-sf-pro-rounded text-[14px] font-medium leading-[16.71px] text-[#C6CCD2] py-3 px-6 rounded-full bg-[#14191F] hover:bg-[#1C1D20] transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Explore
                </button>
              </div>
            )}
            {budgets.length > 0 && (
              <button
                onClick={() => setIsBudgetExplorerOpen(true)}
                className="mt-8 w-full py-3 px-6 rounded-full bg-[#14191F] hover:bg-[#1C1D20] transition-colors flex items-center justify-center gap-2 text-[#C6CCD2]"
              >
                <Plus className="w-4 h-4" />
                Explore Budgets
              </button>
            )}
          </div>
        )}

        {activeTab === 'members' && (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            <div className="flex -space-x-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#1C1D20] flex items-center justify-center ring-4 ring-[#00070F]">
                <span className="text-2xl">👨</span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#1C1D20] flex items-center justify-center ring-4 ring-[#00070F]">
                <span className="text-2xl">👩</span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#1C1D20] flex items-center justify-center ring-4 ring-[#00070F]">
                <span className="text-2xl">👨‍🦰</span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#1C1D20] flex items-center justify-center ring-4 ring-[#00070F]">
                <span className="text-2xl">👩‍🦰</span>
              </div>
            </div>
            <p className="text-[#545E69] mb-6">{familyName}&apos;s family looks empty, invite others to join you</p>
            <button
              onClick={() => setIsInviteOpen(true)}
              className="py-3 px-6 rounded-full bg-[#14191F] hover:bg-[#1C1D20] transition-colors flex items-center gap-2 text-white"
            >
              <Plus className="w-4 h-4" />
              Invite
            </button>
          </div>
        )}
      </div>

      {/* Request Approval Sheet */}
      <Sheet open={isRequestOpen} onOpenChange={setIsRequestOpen}>
        <SheetContent 
          side="bottom" 
          className="bg-[#00070F] border-t border-[#192027] rounded-t-[32px] p-6"
          hideCloseButton
        >
          <SheetHeader className="flex flex-row items-center justify-between mb-6">
            <SheetTitle className="text-[24px] font-medium text-white">
              Approve Request
            </SheetTitle>
            <button 
              onClick={() => setIsRequestOpen(false)}
              className="text-[#545E69] flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Close
            </button>
          </SheetHeader>

          {selectedRequest && (
            <>
              <div className="p-4 bg-[#14191F] rounded-lg flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-[#1C1D20] flex items-center justify-center">
                      <span className="text-2xl">{selectedRequest.avatar}</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#1C1D20] flex items-center justify-center">
                      <selectedRequest.icon className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-white">{selectedRequest.name}</p>
                    <p className="text-sm text-[#545E69]">{selectedRequest.purpose}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#545E69]">{selectedRequest.status}</p>
                  <p className="font-medium text-white">{selectedRequest.amount}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-3 px-6 rounded-full bg-transparent border border-[#192027] text-[#545E69] hover:bg-[#14191F] transition-colors">
                  Adjust
                </button>
                <button className="flex-1 py-3 px-6 rounded-full bg-transparent border border-[#192027] text-[#FF5252] hover:bg-[#14191F] transition-colors">
                  Decline
                </button>
                <button className="flex-1 py-3 px-6 rounded-full bg-transparent border border-[#192027] text-[#0278FF] hover:bg-[#14191F] transition-colors">
                  Accept
                </button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      {/* Budget Explorer Sheet */}
      <Sheet open={isBudgetExplorerOpen} onOpenChange={setIsBudgetExplorerOpen}>
        <SheetContent 
          side="bottom" 
          className="bg-[#00070F] border-t border-[#192027] rounded-t-[32px] p-6"
          hideCloseButton
        >
          <SheetHeader className="flex flex-row items-center justify-between mb-6">
            <SheetTitle className="text-[24px] font-medium text-white">
              Explore Budgets
            </SheetTitle>
            <button 
              onClick={() => setIsBudgetExplorerOpen(false)}
              className="text-[#545E69] flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Close
            </button>
          </SheetHeader>

          <div className="space-y-4">
            {budgetCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => toggleBudgetCategory(category.name)}
                className="w-full flex items-center justify-between p-2 hover:bg-[#14191F] rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{category.icon}</span>
                  <span className="text-[15px] text-white">{category.name}</span>
                </div>
                <div className={`w-5 h-5 rounded border ${
                  selectedBudgets.includes(category.name)
                    ? 'bg-[#0278FF] border-[#0278FF]'
                    : 'border-[#545E69]'
                } flex items-center justify-center`}>
                  {selectedBudgets.includes(category.name) && (
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Family Sheet */}
      <Sheet open={isFamilyOpen} onOpenChange={setIsFamilyOpen}>
        <SheetContent 
          side="bottom" 
          className="bg-[#00070F] border-t border-[#192027] rounded-t-[32px] p-6"
          hideCloseButton
        >
          <SheetHeader className="flex flex-row items-center justify-between mb-6">
            <SheetTitle className="text-[24px] font-medium text-white">
              Family Details
            </SheetTitle>
            <button 
              onClick={() => setIsFamilyOpen(false)}
              className="text-[#545E69] flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Close
            </button>
          </SheetHeader>

          <div className="p-4 bg-[#14191F] rounded-lg flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{familyIcon}</span>
              <div>
                <p className="font-medium text-white">{familyName}&apos;s family</p>
                <p className="text-sm text-[#545E69]">{currentFamily?.description}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#545E69]">Total budget</p>
              <p className="font-medium text-white">$500,000</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={handleSetupFamily}
              className="flex-1 py-3 px-6 rounded-full bg-transparent border border-[#192027] text-white hover:bg-[#14191F] transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Setup a family
            </button>
            <button className="flex-1 py-3 px-6 rounded-full bg-transparent border border-[#192027] text-[#0278FF] hover:bg-[#14191F] transition-colors flex items-center justify-center gap-2">
              <Link2 className="w-4 h-4" />
              Copy Link
            </button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Invite Sheet */}
      <Sheet open={isInviteOpen} onOpenChange={setIsInviteOpen}>
        <SheetContent 
          side="bottom" 
          className="bg-[#00070F] border-t border-[#192027] rounded-t-[32px] p-6"
          hideCloseButton
        >
          <SheetHeader className="flex flex-row items-center justify-between mb-8">
            <SheetTitle className="text-[24px] font-medium text-white">
              Share
            </SheetTitle>
            <button 
              onClick={() => setIsInviteOpen(false)}
              className="text-[#545E69] flex items-center gap-2"
            >
              <X className="w-5 h-5" />
              Close
            </button>
          </SheetHeader>

          <div className="space-y-6">
            <div className="p-4 bg-[#14191F] rounded-2xl flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0278FF]/10 to-transparent pointer-events-none" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#1C1D20] flex items-center justify-center">
                  <span className="text-2xl">{familyIcon}</span>
                </div>
                <div>
                  <h3 className="text-white text-lg">{familyName}&apos;s family</h3>
                  <p className="text-[#545E69] text-sm">{currentFamily?.description}</p>
                </div>
              </div>
              <button 
                className="flex items-center gap-2 text-[#0278FF] hover:text-[#0267E0] transition-colors bg-[#14191F] border border-[#192027] px-4 py-2 rounded-full"
              >
                <Copy className="w-4 h-4" />
                Copy Link
              </button>
            </div>

            <form onSubmit={handleInviteByEmail} className="relative">
              <input
                type="email"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                placeholder="Invite a family member by email"
                className="w-full h-12 px-4 bg-[#14191F] border border-[#192027] rounded-full text-white placeholder-[#545E69] focus:outline-none focus:border-[#0278FF]"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 py-1.5 px-6 rounded-full bg-[#0278FF] text-white hover:bg-[#0267E0] transition-colors text-sm"
              >
                Invite
              </button>
            </form>
          </div>
        </SheetContent>
      </Sheet>

      <SetupFooter activePage="family" />
    </main>
  );
}