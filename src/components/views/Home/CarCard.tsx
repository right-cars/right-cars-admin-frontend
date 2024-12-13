import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import ActionsDropdown from "./ActionsDropdown";

interface CardProps {
  id: string;
  img: string;
  make: string;
  model: string;
  year: number;
  // brand: string;
  price: string;
}
export default function CarCard(props: CardProps) {
  const { img, year, make, model, price, id } = props;
  return (
    <li className="pb-6 bg-pureWhite flex flex-col gap-6 items-center rounded-lg border border-lightGray shadow-custom relative">
      <div className="absolute top-[14px] right-[14px]">
        {" "}
        <ActionsDropdown />
      </div>

      <Image src={img} alt={make} width={272} height={200} />

      <div className="px-4">
        <p className="text-sm-extended font-bold mb-[6px]">{year}</p>
        <h3 className='text-base-extended font-semibold mb-2'>{make} {model}</h3>
        <p className="text-md font-bold text-gray">{price}</p>
      </div>

      <div className="px-4 w-full mt-auto">
        <Button
          as={Link}
          radius="full"
          fullWidth
          color="primary"
          variant="flat"
          href={`/edit/${id}`}
          className="uppercase"
        >
          Edit details
        </Button>
      </div>
    </li>
  );
}
