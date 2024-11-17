import { Header } from "@/components/Header";
import { BudgetOverview } from "@/components/BudgetOverview";
import { FamilyRequests } from "@/components/FamilyRequests";
import { RecentActivities } from "@/components/RecentActivities";
import { BottomNav } from "@/components/BottomNav";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0A0B0D] text-white mx-auto max-w-[432px]">
      <Header />
      <div className="pt-16 pb-24">
        <BudgetOverview />
        <FamilyRequests />
        <RecentActivities />
      </div>
      <BottomNav activePage="home" />
    </main>
  );
}