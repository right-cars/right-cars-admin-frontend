import { Tab, Tabs } from "@nextui-org/react";
import { temporaryData } from "./temporaryData";
import CarCard from "@/components/views/Home/CarCard";
import { useState } from "react";

const tabs = [
  { name: "ALL", key: "all" },
  { name: "active", key: "active" },
  { name: "paid deposit", key: "deposit" },
  { name: "archive", key: "archive" },
];

export default function StatusTabs() {
  const [selectedKey, setSelectedKey] = useState<string | number>("all");
  const filteredCars = temporaryData.filter((car) => {
    switch (selectedKey) {
      case "all":
        return true;
      case "active":
        return car.active;
      case "deposit":
        return car.deposit;
      case "archive":
        return car.archive;
      default:
        return true;
    }
  });

  return (
    <Tabs
      selectedKey={selectedKey}
      onSelectionChange={(key) => setSelectedKey(key)}
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
          <ul className="grid grid-cols-4 gap-4 mt-14 mb-20">
             {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              id={car.id}
              img={car.img}
              brand={car.brand}
              price={car.price}
              year={car.year}
            />
          ))}
          </ul>
         
        </Tab>
      ))}
    </Tabs>
  );
}
