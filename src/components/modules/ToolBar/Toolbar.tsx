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

function getTitleText(variant: "manage" | "edit" | "add"): string {
  switch (variant) {
    case "edit":
      return "EDIT:";
    case "add":
      return "ADD A";
    default:
      return "MANAGE";
  }
}

export default function Toolbar({
  title,
    // @ts-expect-error
    setFilters,
  variant = "manage",
  type = "vehicles",

}: Props) {
  const titleText = getTitleText(variant);

  return (
    <div className="py-16">
      <GoBackBtn />

      <div className="flex justify-between items-center">
        <h1 className="text-l font-bold uppercase">
          {titleText} <span className="text-blue">{title}</span>
        </h1>

        {variant === "manage" && (
          <div className="flex items-center gap-4">
            <SearchInput setFilters={setFilters} />
            {type === "vehicles" ? <SortDropdown setFilters={setFilters} /> : <UsersSortDropdown />}
            {type === "vehicles" ? <VehicleSelect setFilters={setFilters} /> : <UsersDropdown />}
          </div>
        )}
      </div>
    </div>
  );
}
