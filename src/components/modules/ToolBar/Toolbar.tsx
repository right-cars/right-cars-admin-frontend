"use client";
import GoBackBtn from "@/components/modules/ToolBar/components/GoBackBtn";
import SearchInput from "./components/SearchInput";
import VehicleSelect from "./components/VehicleDropdown";
import SortDropdown from "./components/SortDropdown";
import UsersDropdown from "./components/UsersDropdown";
import UsersSortDropdown from "./components/UsersSortDropDown";

interface Props {
  title: string;
  variant?: "manage" | "edit" | "add";
  type?: "users" | "vehicles";
}

export default function Toolbar({
  title,
  variant = "manage",
  type = "vehicles",
}: Props) {
  const titleText =
    variant === "edit" ? "EDIT:" : variant === "add" ? "ADD A" : "MANAGE";
  return (
    <div className="py-16">
      <GoBackBtn />

      <div className="flex justify-between items-center">
        <h1 className="text-l font-bold uppercase">
          {titleText} <span className="text-blue">{title}</span>
        </h1>

        {variant === "manage" && (
          <div className="flex items-center gap-4">
            <SearchInput />
            {type === "vehicles" ? <SortDropdown /> : <UsersSortDropdown />}

            {type === "vehicles" ? <VehicleSelect /> : <UsersDropdown />}
          </div>
        )}
      </div>
    </div>
  );
}
