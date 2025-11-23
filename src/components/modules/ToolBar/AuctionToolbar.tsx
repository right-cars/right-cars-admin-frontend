"use client";

import GoBackBtn from "@/components/modules/ToolBar/components/GoBackBtn";

interface Props {
  title: string;
  variant?: "manage" | "edit" | "add";
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

export default function AuctionToolbar({
  title,
  variant = "manage",

}: Props) {

  const titleText = getTitleText(variant);

  return (
    <div className="py-16">
      <GoBackBtn />

      <div className="flex justify-between items-center">
        <h1 className="text-l font-bold uppercase">
          {titleText} <span className="text-blue">{title}</span>
        </h1>
      </div>
    </div>
  );
}
