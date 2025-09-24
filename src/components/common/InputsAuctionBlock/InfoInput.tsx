import { Image, Input } from "@nextui-org/react";
// import {useMask} from "@react-input/mask";
import { InputProps } from "@/types/types";
// import {Controller} from "react-hook-form";

export default function InfoInput({
  label,
    name = "",
    // control,
    value,
    // @ts-expect-error
    register,
    // mask,
  // onChange,
  readOnly = false,
    errors,
}: InputProps) {
    // const inputRef = useMask({
    //     mask: '_____________',
    //     replacement: { _: /\d/ },
    // });

    return (
        <Input
            {...register(name)}
            isReadOnly={readOnly ? true : false}
            variant="underlined"
            label={label}
            defaultValue={value}
            // ref={mask ? inputRef : null}
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
        />
        // <Input
        //     {...register(name)}
        //     isReadOnly={readOnly ? true : false}
        //     variant="underlined"
        //     label={label}
        //     {/*{...field}*/}
        //     ref={mask ? inputRef : null}
        //     // @ts-expect-error
        //     errorMessage={errors[name] ? errors[name]?.message : ""}
        //     // @ts-expect-error
        //     isInvalid={Boolean(errors[name])}
        //     endContent={
        //         !readOnly && (
        //             <Image
        //                 src="/icons/edit.svg"
        //                 alt="edit icon"
        //                 width={24}
        //                 height={24}
        //                 className="flex-shrink-0 cursor-pointer"
        //             />
        //         )
        //     }
        // />
      // <Controller
      //     name={name}
      //     control={control}
      //     defaultValue={value}
      //     render={({ field }) => <Input
      //         isReadOnly={readOnly ? true : false}
      //         variant="underlined"
      //         label={label}
      //         {...field}
      //         ref={mask ? inputRef : null}
      //         // @ts-expect-error
      //         errorMessage={errors[name] ? errors[name]?.message : ""}
      //         // @ts-expect-error
      //         isInvalid={Boolean(errors[name])}
      //         endContent={
      //             !readOnly && (
      //                 <Image
      //                     src="/icons/edit.svg"
      //                     alt="edit icon"
      //                     width={24}
      //                     height={24}
      //                     className="flex-shrink-0 cursor-pointer"
      //                 />
      //             )
      //         }
      //     />}
      // />
    )
}
