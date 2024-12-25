"use client"

import {useCallback} from "react";
import {useRouter} from "next/navigation";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function GoBackBtn() {
    const router = useRouter();
    const goBack = useCallback(()=> router.back(), []);

  return (
    <Button onPress={goBack} variant="light" className="flex items-center gap-[6px] mb-6">
      <Image
        src="/icons/toolbar/arrow-left.svg"
        alt="back icon"
        width={24}
        height={24}
      />
      <p className="text-gray font-metrophobic leading-[1.42]">Go back</p>
    </Button>
  );
}
