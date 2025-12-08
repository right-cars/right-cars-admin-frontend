import {Select, SelectItem} from "@nextui-org/react";
// import { InputProps } from "@/types/types";
import {Controller} from "react-hook-form";

// @ts-expect-error
export default function SelectInput({label, name = "", control, value, options,}) {
    return (
            <Controller
                name={name}
                control={control}
                defaultValue={value}
                render={({ field }) => <Select
                    variant="underlined"
                    label={label}
                    defaultSelectedKeys={[value]}
                    {...field}
                    >
                    {
                        // @ts-expect-error
                        options.map((option) => (
                        <SelectItem key={option.value}>{option.text}</SelectItem>
                    ))}
                </Select>}
            />)

}
