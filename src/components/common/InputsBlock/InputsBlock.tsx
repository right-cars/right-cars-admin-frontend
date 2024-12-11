import FileUploadInput from "./FileUploadInput";
import InfoInput from "./InfoInput";
import {Control} from "react-hook-form";

interface InputData {
  name: string;
  id: string;
  label: string;
  value: string;
  isFileInput?: boolean;
}

interface InputsBlockProps {
  title: string;
  inputs: InputData[];
  control: Control;
  errors?: object;
  // onInputChange: (
  //   blockTitle: string,
  //   inputId: string,
  //   newValue: string
  // ) => void;
  // onFileChange: (inputId: string, file: File | null) => void;
}

export default function InputsBlock({
  title,
  inputs,
    errors,
  // onInputChange,
  // onFileChange,
  control,
}: InputsBlockProps) {

  return (
    <div>
      <h2 className="text-md font-bold mb-14 text-black uppercase">{title}</h2>
      <div className="p-8 bg-pureWhite rounded-[24px] shadow-custom ">
        <div className="grid grid-cols-2 gap-4">
          {inputs.map((input) => (
            input.isFileInput ? (
              <FileUploadInput
                  control={control}
                key={input.id}
                label={input.label}
                  name={input.name}
                  errors={errors}
                // onFileChange={(file) => {
                //   onFileChange(input.id, file);
                // }}
              />
            ) : (
              <InfoInput
                key={input.id}
                label={input.label}
                control={control}
                name={input.name}
                errors={errors}
                value={input.value}
                // onChange={(newValue) => onInputChange(title, input.id, newValue)}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
}
