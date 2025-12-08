"use client";

import {useState} from "react";
import { Tab, Tabs } from "@nextui-org/react";
import {Spinner} from "@nextui-org/spinner";
import CustomPagination from "../../common/Pagination";
import CarCard from "@/components/views/Home/CarCard";
import NotFoundData from "@/components/common/NotFoundData/NotFoundData";
// import { temporaryData } from "./temporaryData";
import { tabs } from "./tabs";

import {useCars} from "@/providers/CarsContext";

const itemsPerPage = 8;

export default function StatusTabs() {
    //@ts-expect-error
  const {cars, current, loading, setLoading, status, setStatus} = useCars();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cars.length / itemsPerPage);

  const paginatedCars = cars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
      <Tabs
          selectedKey={status}
          onSelectionChange={(key) => {
            setStatus(key);
            setLoading(true);
            // setSelectedKey(key);
            // setCurrentPage(1);
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
        {tabs.map(({name, key}) => (
            <Tab
                key={key}
                title={name}
                className="uppercase"
                style={{fontWeight: "bold"}}
            >
                {(current === "success" && !Boolean(cars?.length)) && <NotFoundData>Not found cars</NotFoundData>}
                {loading && <div style={{textAlign: "center"}} className="mt-[150px]"><Spinner size="lg" label="Loading..." labelColor="primary" /></div>}
                {(current === "success" && Boolean(cars?.length)) && <ul className="grid grid-cols-4 gap-4 mt-14 mb-20">
                  {/*  @ts-expect-error*/}
                  {paginatedCars.map((car) => (
                      <CarCard
                          key={car._id}
                          id={car._id}
                          img={car.mainImage || car.imageUrls[0]}
                          make={car.make}
                          model={car.model}
                          price={car.price}
                          year={car.year}
                          status={car.status}
                      />
                  ))}
                </ul>}

                {(current === "success" && Boolean(cars?.length)) && <div className="flex justify-center mt-6">
                  <CustomPagination
                    total={totalPages}
                    initialPage={currentPage}
                    onChange={handlePageChange}
                  />
                </div>}
            </Tab>
        ))}
      </Tabs>
  );
}
