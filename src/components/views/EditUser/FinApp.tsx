import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

export default function FinApp() {
  return (
    <div className="mb-20">
      <h2 className="text-md font-bold mb-14 text-black uppercase">
        Finance applications
      </h2>
      <div className="py-4 px-[8px] bg-pureWhite rounded-[24px] shadow-custom w-[540px]">
          <div className="flex justify-between items-center gap-16 px-3 pb-[6px] border-b-2 border-[#D4D4D8] w-full">
            <Link
              href="#"
              isExternal
              showAnchorIcon
              anchorIcon={
                <Image
                  src="/icons/link.svg"
                  alt="icon"
                  width={12}
                  height={12}
                />
              }
              underline="always"
              target="_blank"
              color="foreground"
              className="text-sm-extended"
            >
              Application #23689
            </Link>
            <div className="flex gap-1">
              <Button radius="full"  color="primary">
                Approve
              </Button>
              <Button className="bordered-button" radius="full" variant="bordered" color="primary">
                Do Not Approve
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
}
