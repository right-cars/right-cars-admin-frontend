"use client";
// import { useState } from "react";
import { Tab, Tabs } from "@nextui-org/react";
import UsersTable from "./UserTable";
import NotFoundData from "@/components/common/NotFoundData/NotFoundData";
// import { temporaryData } from "./temporaryData";

import {useUsers} from "@/providers/UsersContext";
import {Spinner} from "@nextui-org/spinner";

const tabs = [
  { name: "ALL", key: "all" },
  { name: "Regular", key: "regular" },
  { name: "dealer", key: "dealer" },
  { name: "archive", key: "archive" },
];

export default function UsersTabs() {
  //@ts-expect-error
  const {users, current, loading, setLoading, type, setType} = useUsers();
  // console.log(users)

  return (
    <Tabs
      selectedKey={type}
      onSelectionChange={(key) => {
        setLoading(true);
          setType(key);
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
          {(current === "success" && !Boolean(users?.length)) && <NotFoundData>Not found users</NotFoundData>}
          {loading && <div style={{textAlign: "center"}} className="mt-[10px]"><Spinner size="lg" label="Loading..." labelColor="primary" /></div>}
          {(current === "success" && Boolean(users?.length)) && <UsersTable data={users} />}
        </Tab>
      ))}
    </Tabs>
  );
}
