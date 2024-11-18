"use client";

import { X, Copy } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function InvitePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const familyName = searchParams.get('name');
  const familyIcon = searchParams.get('icon');
  const [email, setEmail] = useState("");

  const handleBack = () => {
    router.back();
  };

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle invite logic
    setEmail("");
  };

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#00070F] text-white">
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <button onClick={handleBack} className="p-2">
            <X className="w-6 h-6" />
          </button>
          <h1 className="font-sf-pro text-[24px] font-medium text-white">
            Share
          </h1>
          <div className="w-10" />
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-[#14191F] rounded-2xl flex items-center justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0278FF]/10 to-transparent pointer-events-none" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#1C1D20] flex items-center justify-center">
                <span className="text-2xl">{familyIcon}</span>
              </div>
              <div>
                <h3 className="text-white text-lg">{familyName}&apos;s family</h3>
                <p className="text-[#545E69] text-sm">Family description</p>
              </div>
            </div>
            <button 
              className="flex items-center gap-2 text-[#0278FF] hover:text-[#0267E0] transition-colors bg-[#14191F] border border-[#192027] px-4 py-2 rounded-full"
            >
              <Copy className="w-4 h-4" />
              Copy Link
            </button>
          </div>

          <form onSubmit={handleInvite} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
      </div>
    </main>
  );
}