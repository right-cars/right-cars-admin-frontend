"use client";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";

export default function SignInForm() {
  return (
    <div className="px-10 py-[72px] bg-white rounded-tl-[60px] rounded-bl-[60px] border-[1px] border-[#D4D4D8] shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.10),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.10)]">
      <div className="mb-10">
        <Select
          variant="underlined"
          label="user"
          placeholder="Select the type of user"
          className="w-full"
        >
          <SelectItem key={"admin"}>Admin</SelectItem>
          <SelectItem key={"super-admin"}>Super Admin</SelectItem>
        </Select>
        <Input
          type="password"
          variant="underlined"
          label="enter a secret key"
          placeholder="Type here"
        />
      </div>
      <Button
        radius="full"
        color="primary"
        variant="flat"
        onClick={() => {
          console.log("💩");
        }}
      >
        Log in
      </Button>
    </div>
  );
}
