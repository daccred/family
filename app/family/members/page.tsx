"use client";

import { X, Settings, Plus, Pencil } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface Member {
  id: number;
  name: string;
  avatar: string;
  role: string;
  stats: {
    requests: number;
    approved: number;
    declined: number;
    spent: string;
  };
}

const members: Member[] = [
  {
    id: 1,
    name: "Andrew John",
    avatar: "👨",
    role: "Uncle",
    stats: {
      requests: 4,
      approved: 1,
      declined: 2,
      spent: "$400,000"
    }
  },
  {
    id: 2,
    name: "Andrew John",
    avatar: "👨",
    role: "Uncle",
    stats: {
      requests: 4,
      approved: 1,
      declined: 2,
      spent: "$400,000"
    }
  },
  {
    id: 3,
    name: "Andrew John",
    avatar: "👨",
    role: "Uncle",
    stats: {
      requests: 4,
      approved: 1,
      declined: 2,
      spent: "$400,000"
    }
  },
  {
    id: 4,
    name: "Andrew John",
    avatar: "👨",
    role: "Uncle",
    stats: {
      requests: 4,
      approved: 1,
      declined: 2,
      spent: "$400,000"
    }
  }
];

export default function MembersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const familyName = searchParams.get('name');
  const familyIcon = searchParams.get('icon');

  const handleBack = () => {
    router.back();
  };

  const handleInvite = () => {
    router.push(`/family/invite?name=${encodeURIComponent(familyName || '')}&icon=${encodeURIComponent(familyIcon || '')}`);
  };

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#00070F] text-white">
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <button onClick={handleBack} className="p-2">
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-2xl">👨‍👩‍👧‍👦</span>
            <h1 className="font-sf-pro text-[24px] font-medium text-white">
              {familyName}&apos;s family
            </h1>
            <button className="p-2 rounded-full bg-[#14191F]">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <button className="p-2">
            <Settings className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {['Requests', 'Budgets', 'Members'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full ${
                tab === 'Members' 
                  ? 'bg-[#14191F] text-white' 
                  : 'text-[#545E69]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-[1px]">
          {members.map((member) => (
            <div 
              key={member.id}
              className="p-4 bg-[#14191F] flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-[#1C1D20] flex items-center justify-center">
                    <span className="text-2xl">{member.avatar}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#1C1D20] flex items-center justify-center">
                    <Pencil className="w-3 h-3 text-[#545E69]" />
                  </div>
                </div>
                <div>
                  <p className="text-white font-medium">{member.name}</p>
                  <p className="text-[#545E69] text-sm">{member.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="grid grid-cols-4 gap-8">
                  <div>
                    <p className="text-[#545E69] text-xs mb-1">Requests</p>
                    <p className="text-white font-medium">{member.stats.requests}</p>
                  </div>
                  <div>
                    <p className="text-[#545E69] text-xs mb-1">Approved</p>
                    <p className="text-[#4CAF50] font-medium">{member.stats.approved}</p>
                  </div>
                  <div>
                    <p className="text-[#545E69] text-xs mb-1">Declined</p>
                    <p className="text-[#FF5252] font-medium">{member.stats.declined}</p>
                  </div>
                  <div>
                    <p className="text-[#545E69] text-xs mb-1">Spent</p>
                    <p className="text-white font-medium">{member.stats.spent}</p>
                  </div>
                </div>
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5C13.1046 5 14 4.10457 14 3C14 1.89543 13.1046 1 12 1C10.8954 1 10 1.89543 10 3C10 4.10457 10.8954 5 12 5Z" stroke="#545E69" strokeWidth="1.5"/>
                    <path d="M22 5C23.1046 5 24 4.10457 24 3C24 1.89543 23.1046 1 22 1C20.8954 1 20 1.89543 20 3C20 4.10457 20.8954 5 22 5Z" stroke="#545E69" strokeWidth="1.5"/>
                    <path d="M2 5C3.10457 5 4 4.10457 4 3C4 1.89543 3.10457 1 2 1C0.89543 1 0 1.89543 0 3C0 4.10457 0.89543 5 2 5Z" stroke="#545E69" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleInvite}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 py-3 px-6 rounded-full bg-[#14191F] hover:bg-[#1C1D20] transition-colors flex items-center gap-2 text-white"
        >
          <Plus className="w-4 h-4" />
          Invite
        </button>
      </div>
    </main>
  );
}