// import { Button, Link } from "@nextui-org/react";

import Image from "next/image";
import ActionsDropdown from "./ActionsDropdown";

interface CardProps {
  id: string;
  img: string;
  make: string;
  model: string;
  year: number;
  // status: string;
    deleteCar: (id: string) => void;
    updateCarStatus: (id: string) => void;
  // brand: string;
  price: string;
  endTime: string;
  endDate: string;
}

export default function AuctionCarCard(props: CardProps) {
  const { updateCarStatus, deleteCar, img, year, make, model, price, endTime, endDate, id } = props;

  return (
    <li className="pb-6 bg-pureWhite flex flex-col gap-6 items-center rounded-lg border border-lightGray shadow-custom relative overflow-hidden">
      <div className="absolute top-[14px] right-[14px]">
        <ActionsDropdown updateCarStatus={updateCarStatus} deleteCar={deleteCar}  id={id} />
      </div>

      <div className="h-[200px]">
        <Image
          src={img}
          alt={`${make} ${model}`}
          width={272}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-4 w-full">
        <p className="text-sm-extended font-bold mb-[6px]">{year}</p>
        <h3 className="text-md font-medium mb-2">
          {make} {model}
        </h3>
        <p className="text-md text-gray">Start price: R {price}</p>
        <h3 className="mt-4 text-base-extended font-medium mb-2">
          ENDS ON: {endDate} {endTime}
        </h3>
      </div>

      {/*<div className="px-4 w-full mt-auto">*/}
      {/*  <Button*/}
      {/*    as={Link}*/}
      {/*    radius="full"*/}
      {/*    fullWidth*/}
      {/*    color="primary"*/}
      {/*    variant="flat"*/}
      {/*    href={`/edit/${id}`}*/}
      {/*    className="uppercase"*/}
      {/*  >*/}
      {/*    Edit details*/}
      {/*  </Button>*/}
      {/*</div>*/}
    </li>
  );
}
