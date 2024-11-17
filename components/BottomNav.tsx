import { Home, Users, Wallet } from "lucide-react";
import Link from "next/link";

interface BottomNavProps {
  activePage?: "home" | "family" | "wallets";
}

export const BottomNav = ({ activePage = "home" }: BottomNavProps) => {
  const navItems = [
    { icon: Home, label: "Home", href: "/", active: activePage === "home" },
    { icon: Users, label: "Family", href: "/family", active: activePage === "family" },
    { icon: Wallet, label: "Wallets", href: "/wallets", active: activePage === "wallets" },
  ];

  return (
    <nav className="fixed max-w-[432px] mx-auto bottom-0 left-0 right-0 bg-[#0A0B0D] border-throw border-gray-800 z-50">
      <div className="px-4 py-2">
        <div className="flex justify-around items-center">
          {navItems.map(({ icon: Icon, label, href, active }) => (
            <Link
              key={label}
              href={href}
              className={`flex flex-col items-center justify-center py-1 px-3 ${
                active ? "text-[#1A73E8]" : "text-gray-400"
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs whitespace-nowrap">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}