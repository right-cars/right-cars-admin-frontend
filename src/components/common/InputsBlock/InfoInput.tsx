import { Image, Input } from "@nextui-org/react";
import { InputProps } from "@/types/types";
import {Controller} from "react-hook-form";

export default function InfoInput({
  label,
    name = "",
    control,
    value,
  // onChange,
  readOnly = false,
    errors,
}: InputProps) {

    return (
      <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => <Input
              isReadOnly={readOnly ? true : false}
              variant="underlined"
              label={label}
              {...field}
              value={value}
              // @ts-expect-error
              errorMessage={errors[name] ? errors[name]?.message : ""}
              // @ts-expect-error
              isInvalid={Boolean(errors[name])}
              endContent={
                  !readOnly && (
                      <Image
                          src="/icons/edit.svg"
                          alt="edit icon"
                          width={24}
                          height={24}
                          className="flex-shrink-0 cursor-pointer"
                      />
                  )
              }
          />}
      />)
}
