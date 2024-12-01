import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

const documents = [
  { id: 1, name: "identity document", url: "#" },
  { id: 2, name: "proof of address", url: "#" },
];
export default function DocumentBlock() {
  return (
    <div className="mb-20">
      <h2 className="text-md font-bold mb-14 text-black uppercase">
        Documents
      </h2>
      <div className="py-4 px-[8px] bg-pureWhite rounded-[24px] shadow-custom">
        <div className="flex items-center gap-8">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center gap-4 justify-between px-3 pb-[6px] border-b-2 border-[#D4D4D8] w-full"
            >
              <Link
                href={doc.url}
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
                {doc.name}
              </Link>
              <div className="flex gap-2">
                <Button radius="full" variant="flat" color="primary">
                  Verify
                </Button>
                <Button radius="full" variant="flat" color="primary">
                  Delete
                </Button>
                <Button radius="full" variant="flat" color="primary">
                  New Request
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
