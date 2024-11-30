import { useState } from "react";
import { Button, Input } from "@nextui-org/react";

export default function VinCode() {
  const [vinCode, setVinCode] = useState<string>("");

  const handleCheck = () => {
    console.log("VIN Code:", vinCode);
  };

  return (
    <>
      <h2 className="text-md font-bold mb-14 text-black uppercase">
        Enter VIN to Add Vehicle (Optional)
      </h2>
      <div className="p-8 bg-white rounded-lg shadow-custom mb-20">
        <Input
          variant="underlined"
          label="Enter the VIN code"
          placeholder="Type here"
          value={vinCode}
          onChange={(e) => setVinCode(e.target.value)}
        />
        <div className="mt-10 flex justify-end">
          <Button
            radius="full"
            color="primary"
            variant="flat"
            onClick={handleCheck}
          >
            Check it
          </Button>
        </div>
      </div>
    </>
  );
}
