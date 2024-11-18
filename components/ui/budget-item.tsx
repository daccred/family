import { Home, GraduationCap, Building, Car, Stethoscope, ShoppingBag, Smartphone, Laptop, Phone, MoreHorizontal } from "lucide-react";

interface BudgetItemProps {
  name: string;
  amount: string;
  progress?: number;
}

const getBudgetIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'rent':
    case 'housing':
      return Building;
    case 'transport':
      return Car;
    case 'medical':
      return Stethoscope;
    case 'grocery':
      return ShoppingBag;
    case 'data':
      return Smartphone;
    case 'gadgets':
      return Laptop;
    case 'airtime':
      return Phone;
    case 'school':
      return GraduationCap;
    case 'miscellaneous':
    case 'other':
      return MoreHorizontal;
    default:
      return Home;
  }
};

const SegmentedProgressBar = () => {
  // Create 40 segments
  return (
    <div className="flex gap-[4px]">
      {Array.from({ length: 150 }).map((_, index) => (
        <div
          key={index}
          className="flex-1 h-[10px] bg-[#1C1D20]"
        />
      ))}
    </div>
  );
};

export const BudgetItem = ({ name, amount }: BudgetItemProps) => {
  const Icon = getBudgetIcon(name);
  
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4 flex-1">
        <div className="w-12 h-12 rounded-lg bg-[#1C1D20] flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#545E69]" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[16px] text-white">{name}</p>
            <div className="text-right">
              <p className="text-[#545E69] text-sm">Budgeted</p>
              <p className="text-white font-medium">${amount}</p>
            </div>
          </div>
          <SegmentedProgressBar />
        </div>
      </div>
    </div>
  );
};