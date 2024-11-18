"use client";
import {
  useAuthModal,
  useLogout,
  useSignerStatus,
  useUser,
} from "@account-kit/react";
import { Header } from "@/components/Header";
import { BudgetOverview } from "@/components/BudgetOverview";
import { FamilyRequests } from "@/components/FamilyRequests";
import { RecentActivities } from "@/components/RecentActivities";
import { BottomNav } from "@/components/BottomNav";
import { SetupFooter } from "@/components/SetupFooter";

export default function Home() {
  const user = useUser();
  const { openAuthModal } = useAuthModal();
  const signerStatus = useSignerStatus();
  const { logout } = useLogout();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A0B0D] text-white mx-auto max-w-[432px]">
      <Header />
      <div className="pt-16 pb-24">
        <BudgetOverview />
        <FamilyRequests />
        <RecentActivities />
      </div>
      <SetupFooter activePage="home" />
    </main>
  );
}
