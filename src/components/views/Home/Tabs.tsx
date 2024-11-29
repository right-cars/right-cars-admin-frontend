import { Tab, Tabs } from "@nextui-org/react";
import { temporaryData } from "./temporaryData";
import CarCard from "@/components/views/Home/CarCard";
import { useState } from "react";
import CustomPagination from "./Pagination";

const tabs = [
  { name: "ALL", key: "all" },
  { name: "active", key: "active" },
  { name: "paid deposit", key: "deposit" },
  { name: "archive", key: "archive" },
];

export default function StatusTabs() {
  const [selectedKey, setSelectedKey] = useState<string | number>("all");
    const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  
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

  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

    const paginatedCars = filteredCars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
    );
  
   const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <Tabs
      selectedKey={selectedKey}
     onSelectionChange={(key) => {
        setSelectedKey(key);
        setCurrentPage(1);
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
          <ul className="grid grid-cols-4 gap-4 mt-14 mb-20">
             {paginatedCars.map((car) => (
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

          <div className="flex justify-center mt-6">
            <CustomPagination
              total={totalPages}
              initialPage={currentPage}
              onChange={handlePageChange}
            />
          </div>
         
        </Tab>
      ))}
    </Tabs>
  );
}
