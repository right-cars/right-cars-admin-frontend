"use client";

// import { useState } from "react";
// import initialUsersData from "../../../data/initialUsersData";
import SaveOrCancel from "@/components/common/Buttons/SaveOrCancel";
// import FileUploadInput from "@/components/common/InputsBlock/FileUploadInput";
import InfoInput from "@/components/common/InputsBlock/InfoInput";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import schema from "@/components/modules/VehicleFormBlock/validation";

//@ts-expect-error
export default function UserInfoBlock({personalData, addressData, email}) {
  // const [formData, setFormData] = useState(data);
  const {
    handleSubmit,
    control,
    // setValue,
    // setError,
    register,
    // watch,
    formState: { errors } } = useForm({
    defaultValues: {...personalData, ...addressData},
    resolver: yupResolver(schema),
  });
  //
  // const handleInputChange = (id: string, newValue: string) => {
  //   const updatedForm = formData.map((input) =>
  //     input.id === id ? { ...input, value: newValue } : input
  //   );
  //   setFormData(updatedForm);
  // };

  // const handleFileChange = (inputId: string, file: File | null) => {
  //   const updatedForm = formData.map((input) =>
  //     input.id === inputId ? { ...input, value: file ? file.name : "" } : input
  //   );
  //   setFormData(updatedForm);
  // };
  //
  // const handleSave = () => {
  //   console.log("Saved Data:", formData);
  // };

  //@ts-expect-error
  const saveUser = async values => {
    console.log(values);
  }

  const onSubmit = handleSubmit(saveUser);

  return (
      <form className="flex flex-col gap-14 pb-[120px]">
        <h2 className="text-md font-bold text-black uppercase">
          login:{" "}
          <span className="text-blue font-normal">{email}</span>
        </h2>
        <h2 className="text-md font-bold text-black uppercase">personal details</h2>
        <div className="p-8 bg-pureWhite rounded-[24px] shadow-custom">
          <div className="grid grid-cols-2 gap-4">
            {/*@ts-expect-error*/}
            {personalData.map((input) =>
                <InfoInput
                    key={input.id}
                    readOnly={input.readonly || false}
                    label={input.label}
                    value={input.value}
                    name={input.name}
                    // @ts-expect-error
                    register={register}

                    control={control}
                    errors={errors}
                    // onChange={(newValue) => handleInputChange(input.id, newValue)}
                />
            )}
          </div>
        </div>

        <h2 className="text-md font-bold text-black uppercase">Address</h2>
        <div className="p-8 bg-pureWhite rounded-[24px] shadow-custom">
          <div className="grid grid-cols-2 gap-4">
            {/*@ts-expect-error*/}
            {addressData.map((input) =>
                <InfoInput
                    key={input.id}
                    readOnly={input.readonly || false}
                    label={input.label}
                    value={input.value}
                    name={input.name}
                    // @ts-expect-error
                    register={register}
                    control={control}
                    errors={errors}
                    // onChange={(newValue) => handleInputChange(input.id, newValue)}
                />
            )}
          </div>
        </div>
        <div className="mt-[-30px]">
          {/*@ts-expect-error*/}
          <SaveOrCancel title={email} variant="save" onSave={onSubmit} />
        </div>
      </form>
  );
}
