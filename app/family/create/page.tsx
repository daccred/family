"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Plus } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle 
} from "@/components/ui/sheet";
import { SetupFooter } from "@/components/SetupFooter";
import { Header } from "@/components/Header";
import { useFamily } from "@/context/FamilyContext";

const emojis = ["😛", "😊", "🤓", "😎"];

export default function CreateFamilyPage() {
  const [familyName, setFamilyName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addFamily, updateFamily } = useFamily();

  useEffect(() => {
    const edit = searchParams.get("edit");
    if (edit === "true") {
      setIsEditing(true);
      setEditId(searchParams.get("id"));
      setFamilyName(searchParams.get("name") || "");
      setSelectedIcon(searchParams.get("icon") || null);
      setDescription(searchParams.get("description") || "");
    }
  }, [searchParams]);

  useEffect(() => {
    setIsValid(familyName.trim() !== "" && description.trim() !== "");
  }, [familyName, description]);

  const handleSubmit = () => {
    if (isValid) {
      const familyData = {
        id: editId || Date.now().toString(),
        name: familyName,
        icon: selectedIcon || "👨‍👩‍👧‍👦",
        type: description,
        budget: "$500,000",
        description
      };

      if (isEditing) {
        updateFamily(familyData);
      } else {
        addFamily(familyData);
      }

      router.push("/family/list");
    }
  };

  return (
    <main className="min-h-dvh overflow-x-hidden bg-[#00070F] text-white mx-auto max-w-[432px]">
      <Header />
      
      <div className="pt-16 pb-24 w-full">
        <div className="px-4 py-6">
          <h1 className="font-sf-pro text-[32px] font-medium leading-[38.19px] text-white mb-8 text-center">
            {isEditing ? "Edit family" : "Create family"}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <div>
              <label className="block text-[#545E69] mb-2">Icon</label>
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <button className="w-[48px] h-[48px] bg-[#0A1017] border border-[#192027] rounded-lg flex items-center justify-center">
                    {selectedIcon ? (
                      <span className="text-2xl">{selectedIcon}</span>
                    ) : (
                      <Plus className="w-5 h-5 text-[#545E69]" />
                    )}
                  </button>
                </SheetTrigger>
                <SheetContent 
                  side="bottom"
                  className="bg-[#00070F] border-t border-[#192027] rounded-t-[32px] p-0"
                >
                  <SheetTitle className="sr-only">Choose an Icon</SheetTitle>
                  <div className="p-8">
                    <h2 className="text-[32px] font-medium text-center mb-8">
                      Choose an Icon
                    </h2>
                    <div className="grid grid-cols-4 gap-4">
                      {emojis.map((emoji) => (
                        <button
                          key={emoji}
                          onClick={() => {
                            setSelectedIcon(emoji);
                            setOpen(false);
                          }}
                          className={`w-16 h-16 bg-[#0A1017] border ${
                            selectedIcon === emoji ? "border-[#0278FF]" : "border-[#192027]"
                          } rounded-lg flex items-center justify-center text-3xl`}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="flex-1">
              <label className="block text-[#545E69] mb-2">Family name</label>
              <input
                type="text"
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
                className="w-full h-[48px] px-4 bg-[#0A1017] border border-[#192027] rounded-lg text-white focus:outline-none focus:border-[#0278FF]"
                placeholder="Enter family name"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-[#545E69] mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-[50px] px-4 py-3 bg-[#0A1017] border border-[#192027] rounded-lg text-white focus:outline-none focus:border-[#0278FF] resize-none"
              placeholder="Enter description"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`w-fit mx-auto py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors ${
              isValid 
                ? "bg-[#0278FF] text-white" 
                : "bg-[#14191F] text-[#545E69]"
            }`}
          >
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.7378 6.48264C16.3419 5.55787 16.1434 4.30561 15.2542 3.6184L11.6094 0.798274C10.7203 0.111059 9.45787 0.234927 8.71466 1.0511C8.02066 0.19081 6.7684 -0.00771904 5.84023 0.625197L2.03256 3.22134C1.10439 3.85426 0.831202 5.09294 1.37928 6.05165C0.347606 6.44531 -0.229315 7.5754 0.0862948 8.65289L1.37928 13.0765C1.69489 14.1557 2.78764 14.7971 3.87022 14.5731C3.92621 15.6761 4.82214 16.5737 5.94544 16.6076L10.5523 16.7451C11.6756 16.779 12.6241 15.9374 12.7446 14.8395C13.8119 15.128 14.9403 14.5528 15.3204 13.4939L16.8747 9.15515C17.2531 8.09802 16.7457 6.9357 15.7395 6.48095L15.7378 6.48264ZM11.2837 12.0499C11.226 12.2111 11.1903 12.374 11.1734 12.5369C11.0156 12.4945 10.851 12.4674 10.6796 12.4623L6.0727 12.3248C5.90132 12.3197 5.73503 12.3367 5.57553 12.3706C5.56705 12.2077 5.54159 12.0414 5.49408 11.8786L4.2011 7.45493C4.15359 7.29033 4.08572 7.13762 4.00427 6.99509C4.15698 6.93739 4.3063 6.86104 4.44714 6.76601L8.25482 4.16987C8.39566 4.07315 8.51952 3.96116 8.62982 3.84068C8.73332 3.96795 8.8504 4.08672 8.98445 4.19193L12.6292 7.01036C12.765 7.11556 12.9092 7.1987 13.0585 7.26658C12.9686 7.40402 12.8922 7.55164 12.8346 7.71284L11.2803 12.0516L11.2837 12.0499ZM9.5478 1.91479C9.8685 1.50076 10.4641 1.4244 10.8781 1.7451L14.5229 4.56353C14.9369 4.88423 15.0133 5.47982 14.6926 5.89384C14.3719 6.30787 13.7763 6.38423 13.3623 6.06353L9.71748 3.2451C9.30346 2.9244 9.2271 2.32881 9.5478 1.91479ZM2.70789 4.2089L6.51557 1.61275C6.94826 1.3175 7.53876 1.42949 7.83401 1.86218C8.12925 2.29488 8.01726 2.88537 7.58457 3.18062L3.77689 5.77676C3.3442 6.07201 2.75371 5.96002 2.45846 5.52733C2.16321 5.09464 2.2752 4.50414 2.70789 4.2089ZM3.70393 13.3887C3.20167 13.5364 2.67396 13.2479 2.52633 12.7439L1.23335 8.32031C1.08573 7.81805 1.37419 7.29033 1.87814 7.14271C2.3804 6.99509 2.90812 7.28355 3.05574 7.7875L4.34872 12.2111C4.49635 12.7134 4.20789 13.2411 3.70393 13.387V13.3887ZM10.5863 15.5522L5.97937 15.4147C5.45505 15.3995 5.04442 14.9617 5.05969 14.4374C5.07497 13.9131 5.51275 13.5024 6.03707 13.5177L10.644 13.6551C11.1683 13.6704 11.5789 14.1082 11.5636 14.6325C11.5484 15.1568 11.1106 15.5675 10.5863 15.5522ZM15.7497 8.75469L14.1954 13.0935C14.0189 13.5873 13.476 13.8435 12.9822 13.667C12.4884 13.4905 12.2322 12.9476 12.4087 12.4538L13.9629 8.11499C14.1394 7.62121 14.6824 7.36499 15.1762 7.54146C15.67 7.71793 15.9262 8.26092 15.7497 8.75469Z" fill="currentColor"/>
            </svg>
            {isEditing ? "Update Family" : "Setup a Family"}
          </button>
        </div>
      </div>

      <SetupFooter activePage="family" />
    </main>
  );
}