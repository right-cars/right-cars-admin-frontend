"use client";

import { useState, useEffect } from "react";
import { Tab, Tabs } from "@nextui-org/react";
import {Spinner} from "@nextui-org/spinner";
// import CustomPagination from "../../common/Pagination";
import CarCard from "@/components/views/Home/CarCard";
// import { temporaryData } from "./temporaryData";
import { tabs } from "./tabs";

import {getAllCars} from "@/api/cars";

// const itemsPerPage = 8;

// @ts-expect-error
export default function StatusTabs({filters}) {
  const [status, setStatus] = useState<string | number>("all");
  // const [currentPage, setCurrentPage] = useState<number>(1);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    const fetchCars = async()=> {
      setLoading(true);
      const data = await getAllCars();
      setCars(data);
      setLoading(false);
    }

    fetchCars();
  }, [filters, status]);

  let filteredCars = cars.filter(car => {
    switch (status) {
      case "all":
        return true;
      case "active":
        // @ts-expect-error
        return car.status === "active";
      case "deposit":
        // @ts-expect-error
        return car.status === "deposit";
      case "archive":
        // @ts-expect-error
        return car.status === "archive";
      default:
        return true;
    }
  });

  if(filters.search) {
    filteredCars = filteredCars.filter(car => {
      const normalizedSearch = filters.search.toLowerCase();
      // @ts-expect-error
      return car.make.toLowerCase().includes(normalizedSearch.toLowerCase()) || car.model.toLowerCase().includes(normalizedSearch.toLowerCase());
    })
  }

  filteredCars = filteredCars.filter(({type}) => {
    switch (filters.type) {
      case "all":
        return true;
      case "cars":
        return type === "cars";
      case "bakkie":
        return type === "bakkie";
      case "commercial":
        return type === "commercial";
      default:
        return true;
    }
  });

  if(filters.sort) {
    if(filters.sort === "price") {
      // @ts-expect-error
      ffilteredCars.sort((a, b) => a.price - b.price);
    }
  }

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
          selectedKey={filters.status}
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
                {filteredCars.map((car) => (
                    <CarCard
                        //@ts-expect-error
                        key={car._id}
                        //@ts-expect-error
                        id={car._id}
                        //@ts-expect-error
                        img={car.images[0]}
                        //@ts-expect-error
                        make={car.make}
                        //@ts-expect-error
                        price={car.price}
                        //@ts-expect-error
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
