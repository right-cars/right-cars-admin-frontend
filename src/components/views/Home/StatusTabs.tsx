"use client";

import { Tab, Tabs } from "@nextui-org/react";
import {Spinner} from "@nextui-org/spinner";
// import CustomPagination from "../../common/Pagination";
import CarCard from "@/components/views/Home/CarCard";
// import { temporaryData } from "./temporaryData";
import { tabs } from "./tabs";

import {useCars} from "@/providers/CarsContext";

// const itemsPerPage = 8;

export default function StatusTabs() {
    //@ts-expect-error
  const {cars, loading, setLoading, status, setStatus} = useCars();

  // const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
  //
  // const paginatedCars = filteredCars.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );
  //
  // const handlePageChange = (page: number) => setCurrentPage(page);

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
              {loading && <div style={{textAlign: "center"}}><Spinner size="lg">Loading</Spinner></div>}
              {!loading && <ul className="grid grid-cols-4 gap-4 mt-14 mb-20">
                {/*  @ts-expect-error*/}
                {cars.map((car) => (
                    <CarCard
                        key={car._id}
                        id={car._id}
                        img={car.images[0]}
                        make={car.make}
                        model={car.model}
                        price={car.price}
                        year={car.year}
                    />
                ))}
              </ul>}

              {/*<div className="flex justify-center mt-6">*/}
              {/*  <CustomPagination*/}
              {/*    total={totalPages}*/}
              {/*    initialPage={currentPage}*/}
              {/*    onChange={handlePageChange}*/}
              {/*  />*/}
              {/*</div>*/}
            </Tab>
        ))}
      </Tabs>
  );
}
