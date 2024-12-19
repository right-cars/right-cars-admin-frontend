import { useState } from "react";
import initialUsersData from "../../../data/initialUsersData";
import SaveOrCancel from "@/components/common/Buttons/SaveOrCancel";
import FileUploadInput from "@/components/common/InputsBlock/FileUploadInput";
import InfoInput from "@/components/common/InputsBlock/InfoInput";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import schema from "@/components/modules/VehicleFormBlock/validation";

export default function UserInfoBlock() {
  const [formData, setFormData] = useState(initialUsersData);
  const {
    handleSubmit,
    control,
    setValue,
    setError,
    watch,
    formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleInputChange = (id: string, newValue: string) => {
    const updatedForm = formData.map((input) =>
      input.id === id ? { ...input, value: newValue } : input
    );
    setFormData(updatedForm);
  };

  const handleFileChange = (inputId: string, file: File | null) => {
    const updatedForm = formData.map((input) =>
      input.id === inputId ? { ...input, value: file ? file.name : "" } : input
    );
    setFormData(updatedForm);
  };

  const handleSave = () => {
    console.log("Saved Data:", formData);
  };

  return (
    <div>
      <h2 className="text-md font-bold mb-14 text-black uppercase">
        login:{" "}
        <span className="text-blue font-normal">humeniuk1997@gmail.com</span>
      </h2>
      <div className="p-8 bg-pureWhite rounded-[24px] shadow-custom">
        <div className="grid grid-cols-2 gap-4">
          {formData.map((input) =>
              // @ts-expect-error
            input.isFileInput ? (
              <FileUploadInput
                key={input.id}
                label={input.label}
                name={input.name}
                  // @ts-expect-error
                control={control}
                // @ts-expect-error
                onFileChange={(file) => handleFileChange(input.id, file)}
              />
            ) : (
              <InfoInput
                key={input.id}
                readOnly={input.readonly || false}
                label={input.label}
                value={input.value}
                name={input.name}
                  // @ts-expect-error
                control={control}
                errors={{}}
                onChange={(newValue) => handleInputChange(input.id, newValue)}
              />
            )
          )}
        </div>
      </div>
      {/*@ts-expect-error*/}
      <SaveOrCancel variant="save" onSave={handleSave} />
    </div>
  );
}
