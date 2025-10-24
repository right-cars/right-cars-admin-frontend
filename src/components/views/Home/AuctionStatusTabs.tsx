"use client";

// import {useState} from "react";
// import { Tab, Tabs } from "@nextui-org/react";
// import {Spinner} from "@nextui-org/spinner";
// import CustomPagination from "../../common/Pagination";
// import CarCard from "@/components/views/Home/CarCard";
import AuctionCarCard from "@/components/views/Home/AuctionCarCard";
// import NotFoundData from "@/components/common/NotFoundData/NotFoundData";
// import { temporaryData } from "./temporaryData";
// import { tabs } from "./tabs";

// const itemsPerPage = 8;
//@ts-expect-error
export default function AuctionStatusTabs({auctions}) {


  // const [currentPage, setCurrentPage] = useState(1);

  // const totalPages = Math.ceil(cars.length / itemsPerPage);

  // const paginatedCars = cars.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  // const handlePageChange = (page: number) => setCurrentPage(page);

  return (
      <ul className="grid grid-cols-4 gap-4 mt-14 mb-20">
          {/*  @ts-expect-error*/}
          {auctions.map(({endTime, endDate, car}) => (
              <AuctionCarCard
                  key={car._id}
                  id={car._id}
                  img={car.mainImage || car.imageUrls[0]}
                  make={car.make}
                  model={car.model}
                  price={car.price}
                  year={car.year}
                  status={car.status}
                  endTime={endTime}
                  endDate={endDate}
              />
          ))}
      </ul>
  );
}
