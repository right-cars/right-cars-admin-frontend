"use client";

import { Button, Input } from "@nextui-org/react";
import {useForm, Controller} from "react-hook-form";
import { useRouter } from 'next/navigation';
import {setCookie} from "cookies-next/client";

import {login} from "@/api/admins";

export default function SignInForm() {
    const router = useRouter();
    const {
        handleSubmit,
        setError,
        control,
        formState: { errors } } = useForm();

    // @ts-expect-error
    const onSubmit = async (data) => {

        try {
            const {role} = await login(data);
            setCookie("role", role);
            router.push("/vehicles");
        } catch {
            setError("password", {
                message: "Password invalid"
            });
        }
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-10 py-[72px] bg-white rounded-tl-[60px] rounded-bl-[60px] border-[1px] border-[#D4D4D8] shadow-custom w-[567px]">
      <div className="mb-10">
          <Controller
              name="password"
              control={control}

              render={({ field }) => (
                  <Input
                      type="password"
                      variant="underlined"
                      label="enter a secret key"
                      placeholder="Type here"
                      {...field}

                      // @ts-expect-error
                      errorMessage={errors?.password?.message || ""}
                      isInvalid={Boolean(errors.password)}
                  />
          )}>
          </Controller>

      </div>
      <Button
        radius="full"
        color="primary"
        variant="flat"
        type="submit"
      >
        Log in
      </Button>
    </form>
  );
}
