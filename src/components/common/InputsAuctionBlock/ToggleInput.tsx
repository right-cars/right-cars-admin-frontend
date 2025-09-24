import { Image, Switch } from "@nextui-org/react";
import { InputProps } from "@/types/types";
import {Controller} from "react-hook-form";

export default function ToggleInput({
  label,
    name = "",
    control,
    value,
  // onChange,
  readOnly = false,
    // errors,
}: InputProps) {

    return (
      <Controller
          name={name}
          control={control}
          defaultValue={value}
          render={({ field }) => <Switch
              isReadOnly={readOnly ? true : false}
              // variant="underlined"
              {...field}
              // defaultValue={value}

              // errorMessage={errors[name] ? errors[name]?.message : ""}
              // @ts-expect-error
              defaultSelected={value}
              // isInvalid={Boolean(errors[name])}
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
              }>{label}</Switch>}
      />
    )
}
