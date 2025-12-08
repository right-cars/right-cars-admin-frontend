import { Image, TimeInput } from "@nextui-org/react";
import { Controller } from "react-hook-form";
import { InputProps } from "@/types/types";

export default function TimeInputInput({
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
            render={({ field: { value, onChange, onBlur } }) => (
                <TimeInput
                    label={label}
                    variant="underlined"
                    isRequired
                    isReadOnly={readOnly}
                    value={value}               // ← значение берём только из RHF
                    onChange={onChange}         // ← NextUI отдаёт TimeValue
                    onBlur={onBlur}
                    // @ts-expect-error
                    errorMessage={errors?.[name]?.message || ""}
                    // @ts-expect-error
                    isInvalid={Boolean(errors?.[name])}
                    endContent={
                        !readOnly && (
                            <Image
                                src="/icons/time.svg"  // свой svg, если нужен
                                alt="time icon"
                                width={24}
                                height={24}
                                className="flex-shrink-0 cursor-pointer"
                            />
                        )
                    }
                />
            )}
        />
    );
}
