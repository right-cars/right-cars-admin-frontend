"use client";

import { Button, Input } from "@nextui-org/react";
import {useForm, Controller} from "react-hook-form";
import { redirect } from 'next/navigation';

import {useAuth} from "@/providers/AuthContext";

export default function SignInForm() {
    const {
        handleSubmit,
        setError,
        control,
        formState: { errors } } = useForm();

    const {login} = useAuth();

    // @ts-expect-error
    const onSubmit = async (data) => {
        if(!data.password) {
            return setError("password", {
                message: "Password must be exist"
            });
        }

        if(data.password !== "admin" && data.password !== "superadmin") {
            return setError("password", {
                message: "Password invalid"
            });
        }

        const role = data.password === "admin" ? "admin" : "superadmin";
        login(role);
        redirect(`/vehicles`);
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
