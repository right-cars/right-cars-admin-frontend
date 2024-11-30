import FileUploadInput from "./FileUploadInput";
import InfoInput from "./InfoInput";

interface InputData {
  id: string;
  label: string;
  value: string;
  isFileInput?: boolean;
}

interface InputsBlockProps {
  title: string;
  inputs: InputData[];
  onInputChange: (
    blockTitle: string,
    inputId: string,
    newValue: string
  ) => void;
  onFileChange: (inputId: string, file: File | null) => void;
}

export default function InputsBlock({
  title,
  inputs,
  onInputChange,
  onFileChange,
}: InputsBlockProps) {
  return (
    <div>
      <h2 className="text-md font-bold mb-14 text-black uppercase">{title}</h2>
      <div className="p-8 bg-white rounded-lg shadow-custom ">
        <div className="grid grid-cols-2 gap-4">
          {inputs.map((input) => (
            input.isFileInput ? (
              <FileUploadInput
                key={input.id}
                label={input.label}
                onFileChange={(file) => {
                  onFileChange(input.id, file);
                }}
              />
            ) : (
              <InfoInput
                key={input.id}
                label={input.label}
                value={input.value}
                onChange={(newValue) => onInputChange(title, input.id, newValue)}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
}
