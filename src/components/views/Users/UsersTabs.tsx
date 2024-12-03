"use client";
import { useState } from "react";
import { Tab, Tabs } from "@nextui-org/react";
import UsersTable from "./UserTable";
import { temporaryData } from "./temporaryData";

const tabs = [
  { name: "ALL", key: "all" },
  { name: "Regular", key: "regular" },
  { name: "dealer", key: "dealer" },
  { name: "archive", key: "archive" },
];

export default function UsersTabs() {
  const [selectedKey, setSelectedKey] = useState<string | number>("all");

  const filteredUsers = temporaryData.filter((user) => {
    switch (selectedKey) {
      case "all":
        return true;
      case "regular":
        return user.regular;
      case "dealer":
        return user.dealer;
      case "archive":
        return user.archive;
      default:
        return true;
    }
  });

  return (
    <Tabs
      selectedKey={selectedKey}
      onSelectionChange={(key) => {
        setSelectedKey(key);
      }}
      aria-label="Status Tabs"
      className="w-full"
      radius="none"
      color="primary"
      defaultSelectedKey="0"
      classNames={{
        tabList: "w-full p-0 bg-pureWhite shadow-custom text-black",
        tab: "",
        cursor: "bg-gray",
        tabContent: "group-data-[selected=true]:text-white",
      }}
    >
      {tabs.map(({ name, key }) => (
        <Tab
          key={key}
          title={name}
          className="uppercase"
          style={{ fontWeight: "bold" }}
        >
          <UsersTable data={filteredUsers} />
        </Tab>
      ))}
    </Tabs>
  );
}
