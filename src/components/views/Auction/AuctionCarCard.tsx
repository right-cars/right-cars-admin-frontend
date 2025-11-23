
import Image from "next/image";

interface CardProps {
  img: string;
  make: string;
  model: string;
  year: number;
  price: string;
}

export default function AuctionCarCard(props: CardProps) {
  const { img, year, make, model, price } = props;

  return (
    <li className="pb-6 bg-pureWhite flex flex-col gap-6 items-center rounded-lg border border-lightGray shadow-custom relative overflow-hidden">

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
        <h3 className="text-base-extended font-medium mb-2">
          {make} {model}
        </h3>
        <p className="text-md font-bold text-gray">R {price}</p>
      </div>

    </li>
  );
}
