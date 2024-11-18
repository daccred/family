"use client";

import { Header } from "@/components/Header";
import { SetupFooter } from "@/components/SetupFooter";

const AlertIcon = () => (
  <svg width="60" height="67" viewBox="0 0 60 67" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M48.2492 21.3333C48.2492 16.4931 46.3264 11.8511 42.9039 8.42855C39.4814 5.00601 34.8394 3.08325 29.9992 3.08325C25.159 3.08325 20.517 5.00601 17.0945 8.42855C13.672 11.8511 11.7492 16.4931 11.7492 21.3333C11.7492 30.7326 9.37812 37.168 6.72942 41.4247C4.4952 45.0153 3.37809 46.8106 3.41906 47.3114C3.46441 47.8659 3.58189 48.0774 4.02876 48.4089C4.43234 48.7083 6.25166 48.7082 9.89029 48.7082H50.1081C53.7467 48.7082 55.5661 48.7083 55.9696 48.4089C56.4165 48.0774 56.534 47.8659 56.5793 47.3114C56.6203 46.8106 55.5032 45.0153 53.269 41.4247C50.6203 37.168 48.2492 30.7326 48.2492 21.3333Z" stroke="#545E69" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.9517 60.875C24.0964 62.768 26.9138 63.9167 29.9994 63.9167C33.085 63.9167 35.9023 62.768 38.0471 60.875" stroke="#0278FF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function AlertsPage() {
  return (
    <main className="min-h-dvh mx-auto max-w-[432px] overflow-x-hidden bg-[#00070F] text-white">
      <Header />
      
      <div className="pt-16 pb-24 w-full">
        <div className="px-4 py-6">
          <h1 className="font-sf-pro text-[32px] font-medium leading-[38.19px] text-white mb-8 text-center">
            Alerts
          </h1>

          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="mb-6">
              <AlertIcon />
            </div>
            <h2 className="text-[24px] font-medium mb-2">Nothing to see here... yet!</h2>
            <p className="text-[#545E69]">We'll let you know when something comes up.</p>
          </div>
        </div>
      </div>

      <SetupFooter activePage="alerts" />
    </main>
  );
}