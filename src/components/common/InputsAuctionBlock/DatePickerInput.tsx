import { Image, DatePicker } from "@nextui-org/react";
import { Controller } from "react-hook-form";
import { InputProps } from "@/types/types";
import {getLocalTimeZone, today} from "@internationalized/date";

export default function DatePickerInput({
                                            label,
                                            name = "",
                                            control,
                                            readOnly = false,
                                            errors,
                                        }: InputProps) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange, onBlur } }) => {
                // console.log(name, value);
                return (
                    <DatePicker
                        label={label}
                        variant="underlined"
                        isRequired
                        isReadOnly={readOnly}
                        value={value}           // ← ВСЁ значение приходит из RHF
                        onChange={onChange}     // ← NextUI отдаёт DateValue, RHF хранит его
                        onBlur={onBlur}
                        // @ts-expect-error
                        minValue={today(getLocalTimeZone())}    // (если надо ограничение — можно добавить позже)
                        // @ts-expect-error
                        errorMessage={errors?.[name]?.message || ""}
                        // @ts-expect-error
                        isInvalid={Boolean(errors?.[name])}
                        endContent={
                            !readOnly && (
                                <Image
                                    src="/icons/calendar.svg"
                                    alt="edit icon"
                                    width={24}
                                    height={24}
                                    className="flex-shrink-0 cursor-pointer"
                                />
                            )
                        }
                    />
                )
            }}
        />
    );
}
