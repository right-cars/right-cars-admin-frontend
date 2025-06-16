"use client";

import {useRef} from "react";
import { Button, Link, useDisclosure } from "@nextui-org/react";
import Image from "next/image";

import DocumentModal from "@/components/common/modals/DocumentModal";

import {deleteDocumentById} from "@/api/users";

// const documents = [
//   { id: 1, name: "identity document", url: "#" },
//   { id: 2, name: "proof of address", url: "#" },
// ];
//@ts-expect-error
export default function DocumentBlock({id, documents}) {
    const {isOpen, onOpenChange} = useDisclosure();
    const documentRef = useRef("");

    const deleteDocument = async (name: string)=> {
        try {
            await deleteDocumentById(id, name);
            console.log(`delete document ${name}`)
        }
        catch(error) {
            console.log(error);
        }
    }

  return (
      <div className="mb-20">
          <h2 className="text-md font-bold mb-14 text-black uppercase">
              Documents
          </h2>
          <div className="py-4 px-[8px] mb-[12px] bg-pureWhite rounded-[24px] shadow-custom">
              <div className="flex items-center gap-8">
                  <div
                      key={documents[0].id}
                      className="flex items-center gap-4 justify-between px-3 pb-[6px] border-b-2 border-[#D4D4D8] w-full"
                  >
                      <Link
                          href={documents[0].url}
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
                          {documents[0].label}
                      </Link>
                      <span onClick={() => {
                          documentRef.current = documents[0].url;
                          onOpenChange();
                      }} className="text-[16px] mr-auto font-semibold text-[#006FEE] cursor-pointer">VIEW</span>
                      <div className="flex gap-2">
                          <Button radius="full" variant="flat" color="primary">
                              VERIFY
                          </Button>
                          <Button onPress={()=> deleteDocument("idOrDriverLicence")} radius="full" variant="flat" color="primary">
                              DELETE
                          </Button>
                          <Button onPress={()=> deleteDocument("idOrDriverLicence")} radius="full" variant="flat" color="primary">
                              NEW REQUEST
                          </Button>
                      </div>
                  </div>

              </div>
          </div>
          <div className="py-4 px-[8px] bg-pureWhite rounded-[24px] shadow-custom">
              <div className="flex items-center gap-8">
                  <div
                      key={documents[1].id}
                      className="flex items-center gap-4 justify-between px-3 pb-[6px] border-b-2 border-[#D4D4D8] w-full"
                  >
                      <Link
                          href={documents[1].url}
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
                          {documents[1].label}
                      </Link>
                      <span onClick={() => {
                          documentRef.current = documents[1].url;
                          onOpenChange();
                      }} className="text-[16px] mr-auto font-semibold text-[#006FEE] cursor-pointer">VIEW</span>
                      <div className="flex gap-2">
                          <Button radius="full" variant="flat" color="primary">
                              VERIFY
                          </Button>
                          <Button onPress={()=> deleteDocument("proofOfPhysicalAddress")} radius="full" variant="flat" color="primary">
                              DELETE
                          </Button>
                          <Button onPress={()=> deleteDocument("proofOfPhysicalAddress")} radius="full" variant="flat" color="primary">
                              NEW REQUEST
                          </Button>
                      </div>
                  </div>

              </div>
          </div>
          <DocumentModal isOpen={isOpen} onOpenChange={onOpenChange} src={documentRef.current}/>
      </div>
  );
}
