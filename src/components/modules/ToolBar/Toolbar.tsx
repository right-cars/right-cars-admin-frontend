import GoBackBtn from "@/components/modules/ToolBar/components/GoBackBtn";
import SearchInput from "./components/SearchInput";
import VehicleSelect from "./components/VehicleDropdown";
import SortDropdown from "./components/SortDropdown";

interface Props {
  title: string;
  variant?: "manage" | "edit" | "add";
}

export default function Toolbar({ title, variant = "manage" }: Props) {
  const titleText =
    variant === "edit" ? "EDIT" : variant === "add" ? "ADD A" : "MANAGE";
  return (
    <div className="py-16 mb-14">
      <GoBackBtn />

      <div className="flex justify-between items-center">
        <h1 className="text-l font-bold uppercase">
          {titleText} <span className="text-blue">{title}</span>
        </h1>

        {/* Пошук, сортування, фільтри */}
        <div className="flex items-center gap-4">
          <SearchInput />
          <SortDropdown />
          <VehicleSelect />
        </div>
      </div>
    </div>
  );
}
