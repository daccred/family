"use client";

import { Plus, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { SetupFooter } from "@/components/SetupFooter";
import { Family, useFamily } from "@/context/FamilyContext";
import { Header } from "@/components/Header";

export default function FamilyListPage() {
  const router = useRouter();
  const { families, deleteFamily } = useFamily();

  const handleCreateFamily = () => {
    router.push("/family/create");
  };

  const handleEditFamily = (family: Family) => { 
    router.push(`/family/create?edit=true&id=${family.id}&name=${encodeURIComponent(family.name)}&icon=${encodeURIComponent(family.icon)}&description=${encodeURIComponent(family.description)}`);
  };

  const handleFamilyClick = (family: Family) => {
    router.push(`/family/dashboard?name=${encodeURIComponent(family.name)}&icon=${encodeURIComponent(family.icon)}`);
  };

  return (
    <main className="min-h-dvh mx-auto overflow-x-hidden bg-[#00070F] text-white max-w-[432px]">
      <Header />
      <div className="px-4 py-6 pt-20">
        <div className="flex items-center justify-center relative mb-8 gap-2">
          <h1 className="font-sf-pro text-[32px] font-medium text-white">
            Family
          </h1>
          <button 
            onClick={handleCreateFamily}
            className="p-2 rounded-[12px] bg-[#14191F] border border-[#192027] hover:bg-[#1C1D20] transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {families.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <p className="text-[#545E69] mb-6">No family yet</p>
            <button
              onClick={handleCreateFamily}
              className="py-3 px-6 rounded-full bg-[#0278FF] text-white hover:bg-[#0267E0] transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Setup new family
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {families.map((family) => (
              <div
                key={family.id}
                className="p-4 bg-[#14191F] rounded-lg flex items-center justify-between"
              >
                <div 
                  className="flex items-center gap-3 flex-1 cursor-pointer"
                  onClick={() => handleFamilyClick(family)}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#1C1D20] flex items-center justify-center">
                    <span className="text-2xl">{family.icon}</span>
                  </div>
                  <div>
                    <p className="font-medium text-white text-left">{family.name}</p>
                    <p className="text-sm text-[#545E69] text-left">{family.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right mr-4">
                    <p className="text-[#545E69] text-sm">Total budget</p>
                    <p className="font-medium text-white">{family.budget}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditFamily(family);
                    }}
                    className="p-2 rounded-lg bg-[#1C1D20] hover:bg-[#2C2D30] transition-colors"
                  >
                    <Pencil className="w-4 h-4 text-[#0278FF]" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteFamily(family.id);
                    }}
                    className="p-2 rounded-lg bg-[#1C1D20] hover:bg-[#2C2D30] transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-[#FF5252]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <SetupFooter activePage="family" />
    </main>
  );
}