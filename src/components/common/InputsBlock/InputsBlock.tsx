import InfoInput from "./InfoInput";

interface InputData {
  id: string;
  label: string;
  value: string;
}

interface InputsBlockProps {
  title: string;
  inputs: InputData[];
  onInputChange: (
    blockTitle: string,
    inputId: string,
    newValue: string
  ) => void;
}

export default function InputsBlock({
  title,
  inputs,
  onInputChange,
}: InputsBlockProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {inputs.map((input) => (
          <InfoInput
            key={input.id}
            label={input.label}
            value={input.value}
            onChange={(newValue) => onInputChange(title, input.id, newValue)}
          />
        ))}
      </div>
    </div>
  );
}
