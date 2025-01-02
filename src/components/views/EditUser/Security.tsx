import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

const password = "123qwe";

export default function Security() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="pb-[120px]">
      <h2 className="text-md font-bold mb-14 text-black uppercase">Security</h2>
      <div className="py-4 px-[8px] bg-pureWhite rounded-[24px] shadow-custom w-[540px]">
        <div className="px-3 pb-[6px]">
          <Input
            variant="underlined"
            endContent={
              <Button
                radius="full"
                variant="flat"
                color="primary"
                onPress={toggleVisibility}
                aria-label="toggle password visibility"
              >
                view
              </Button>
            }
            type={isVisible ? "text" : "password"}
            className="w-full"
            value={password}
          />
        </div>
      </div>
    </div>
  );
}
