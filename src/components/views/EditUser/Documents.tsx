"use client";

import {useState, useRef} from "react";
import { Button, Link, useDisclosure } from "@nextui-org/react";
import Image from "next/image";

import DocumentModal from "@/components/common/modals/DocumentModal";
import DeleteDocumentModal from "@/components/common/modals/DeleteDocumentModal";
import VerifyDocumentModal from "@/components/common/modals/VerifyDocumentModal";

import {deleteDocumentById, verifyDocumentById} from "@/api/users";

// const documents = [
//   { id: 1, name: "identity document", url: "#" },
//   { id: 2, name: "proof of address", url: "#" },
// ];

// const names = {
//     idOrDriverLicence: "identity document",
//     proofOfPhysicalAddress: "proof of address"
// };
// http://res.cloudinary.com/do1wobsr2/image/upload/v1750163611/documents/wkhwkgkhkocu7iso1aaf.png
// http://res.cloudinary.com/do1wobsr2/image/upload/v1750163614/documents/jm6h1kckooplldou09mh.webp
//@ts-expect-error
export default function DocumentBlock({id, documents, user}) {
    const [userDocuments, setUserDocuments] = useState(documents);
    const {isOpen, onOpenChange} = useDisclosure();
    const {isOpen: isDocumentDeleteOpen, onOpenChange: onDocumentDeleteOpenChange} = useDisclosure();
    const {isOpen: isDocumentVerifyOpen, onOpenChange: onDocumentVerifyOpenChange} = useDisclosure();

    const documentRef = useRef("");
    const documentNameRef = useRef("");

    const deleteDocument = async (name: string)=> {
        try {
            await deleteDocumentById(id, name);
            //@ts-expect-error
            setUserDocuments(prevDocuments => prevDocuments.filter(item => item.name !== name));
        }
        catch(error) {
            console.log(error);
        }
    }

    const verifyDocument = async (name: string)=> {
        try {
            await verifyDocumentById(id, name);
            //@ts-expect-error
            setUserDocuments(prevDocuments => prevDocuments.filter(item => item.name !== name));
        }
        catch(error) {
            console.log(error);
        }
    }

    //@ts-expect-error
    const openDocumentDeleteModal = (doc)=> {
        onDocumentDeleteOpenChange();
        documentNameRef.current = doc;
    }

    //@ts-expect-error
    const openDocumentVerifyModal = (doc)=> {
        onDocumentVerifyOpenChange();
        documentNameRef.current = doc;
    }

    if(!userDocuments.length) return null;

  return (
      <div className="mb-20">
          <h2 className="text-md font-bold mb-14 text-black uppercase">
              Documents
          </h2>
          {/*@ts-expect-error*/}
          {userDocuments.map(({url, label, name}) => <div key={name} className="py-4 px-[8px] mb-[12px] bg-pureWhite rounded-[24px] shadow-custom">
              <div className="flex items-center gap-8" >
                  <div
                      className="flex items-center gap-4 justify-between px-3 pb-[6px] border-b-2 border-[#D4D4D8] w-full"
                  >
                      <Link
                          href={url}
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
                          {label}
                      </Link>
                      <span onClick={() => {
                          documentRef.current = url;
                          onOpenChange();
                      }} className="text-[16px] mr-auto font-semibold text-[#006FEE] cursor-pointer">VIEW</span>
                      <div className="flex gap-2">
                          <Button onPress={()=> openDocumentVerifyModal({label, name})} radius="full" variant="flat" color="primary">
                              VERIFY
                          </Button>
                          <Button onPress={() => openDocumentDeleteModal({label, name, actionName: "delete"})} radius="full"
                                  variant="flat" color="primary">
                              DELETE
                          </Button>
                          <Button onPress={() => openDocumentDeleteModal({label, name, actionName: "request new"})} radius="full" variant="flat"
                                  color="primary">
                              NEW REQUEST
                          </Button>
                      </div>
                  </div>

              </div>
          </div>)}
          {/*<div className="py-4 px-[8px] mb-[12px] bg-pureWhite rounded-[24px] shadow-custom">*/}
          {/*    <div className="flex items-center gap-8">*/}
          {/*        <div*/}
          {/*            key={documents[0].id}*/}
          {/*            className="flex items-center gap-4 justify-between px-3 pb-[6px] border-b-2 border-[#D4D4D8] w-full"*/}
          {/*        >*/}
          {/*            <Link*/}
          {/*                href={documents[0].url}*/}
          {/*                isExternal*/}
          {/*                showAnchorIcon*/}
          {/*                anchorIcon={*/}
          {/*                    <Image*/}
          {/*                        src="/icons/link.svg"*/}
          {/*                        alt="icon"*/}
          {/*                        width={12}*/}
          {/*                        height={12}*/}
          {/*                    />*/}
          {/*                }*/}
          {/*                underline="always"*/}
          {/*                target="_blank"*/}
          {/*                color="foreground"*/}
          {/*                className="text-sm-extended"*/}
          {/*            >*/}
          {/*                {documents[0].label}*/}
          {/*            </Link>*/}
          {/*            <span onClick={() => {*/}
          {/*                documentRef.current = documents[0].url;*/}
          {/*                onOpenChange();*/}
          {/*            }} className="text-[16px] mr-auto font-semibold text-[#006FEE] cursor-pointer">VIEW</span>*/}
          {/*            <div className="flex gap-2">*/}
          {/*                <Button radius="full" variant="flat" color="primary">*/}
          {/*                    VERIFY*/}
          {/*                </Button>*/}
          {/*                <Button onPress={()=> openDocumentDeleteModal("identity document")} radius="full" variant="flat" color="primary">*/}
          {/*                    DELETE*/}
          {/*                </Button>*/}
          {/*                <Button onPress={()=> deleteDocument("idOrDriverLicence")} radius="full" variant="flat" color="primary">*/}
          {/*                    NEW REQUEST*/}
          {/*                </Button>*/}
          {/*            </div>*/}
          {/*        </div>*/}

          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className="py-4 px-[8px] bg-pureWhite rounded-[24px] shadow-custom">*/}
          {/*    <div className="flex items-center gap-8">*/}
          {/*        <div*/}
          {/*            key={documents[1].id}*/}
          {/*            className="flex items-center gap-4 justify-between px-3 pb-[6px] border-b-2 border-[#D4D4D8] w-full"*/}
          {/*        >*/}
          {/*            <Link*/}
          {/*                href={documents[1].url}*/}
          {/*                isExternal*/}
          {/*                showAnchorIcon*/}
          {/*                anchorIcon={*/}
          {/*                    <Image*/}
          {/*                        src="/icons/link.svg"*/}
          {/*                        alt="icon"*/}
          {/*                        width={12}*/}
          {/*                        height={12}*/}
          {/*                    />*/}
          {/*                }*/}
          {/*                underline="always"*/}
          {/*                target="_blank"*/}
          {/*                color="foreground"*/}
          {/*                className="text-sm-extended"*/}
          {/*            >*/}
          {/*                {documents[1].label}*/}
          {/*            </Link>*/}
          {/*            <span onClick={() => {*/}
          {/*                documentRef.current = documents[1].url;*/}
          {/*                onOpenChange();*/}
          {/*            }} className="text-[16px] mr-auto font-semibold text-[#006FEE] cursor-pointer">VIEW</span>*/}
          {/*            <div className="flex gap-2">*/}
          {/*                <Button radius="full" variant="flat" color="primary">*/}
          {/*                    VERIFY*/}
          {/*                </Button>*/}
          {/*                <Button onPress={()=> deleteDocument("proofOfPhysicalAddress")} radius="full" variant="flat" color="primary">*/}
          {/*                    DELETE*/}
          {/*                </Button>*/}
          {/*                <Button onPress={()=> deleteDocument("proofOfPhysicalAddress")} radius="full" variant="flat" color="primary">*/}
          {/*                    NEW REQUEST*/}
          {/*                </Button>*/}
          {/*            </div>*/}
          {/*        </div>*/}

          {/*    </div>*/}
          {/*</div>*/}
          <DocumentModal isOpen={isOpen} onOpenChange={onOpenChange} src={documentRef.current}/>
          {/*@ts-expect-error*/}
          <DeleteDocumentModal actionName={documentNameRef.current?.actionName} user={user} documentName={documentNameRef.current?.label} isOpen={isDocumentDeleteOpen} onOpenChange={onDocumentDeleteOpenChange} onPress={()=> deleteDocument(documentNameRef.current?.name)} />
          {/*@ts-expect-error*/}
          <VerifyDocumentModal user={user} documentName={documentNameRef.current?.label} isOpen={isDocumentVerifyOpen} onOpenChange={onDocumentVerifyOpenChange} onPress={()=> verifyDocument(documentNameRef.current?.name)} />
      </div>
  );
}
