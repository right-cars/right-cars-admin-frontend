import FileUploadInput from "./FileUploadInput";
import InfoInput from "./InfoInput";
import SelectInput from "./SelectInput";
import ToggleInput from "@/components/common/InputsBlock/ToggleInput";
import AuctionCarCard from "@/components/views/Auction/AuctionCarCard";
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

// @ts-expect-error
const getInput = ({register, input, control, errors}) => {
  if(input.toggle) {
    return <ToggleInput key={input.id} control={control} errors={errors} name={input.name} value={input.value} label={input.label} />;
  }

  if(input.isFileInput)
    return (
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
    )
  if(input.options)
    return (<SelectInput
        control={control}
        key={input.id}
        label={input.label}
        name={input.name}
        options={input.options}
        value={input.value}
        // onFileChange={(file) => {
        //   onFileChange(input.id, file);
        // }}
    />)

  return (
      <InfoInput
          key={input.id}
          label={input.label}
          control={control}
          name={input.name}
          errors={errors}
          value={input.value}
          // @ts-expect-error
          mask={input.mask}
          register={register}
          // onChange={(newValue) => onInputChange(title, input.id, newValue)}
      />
  )
}

export default function InputsAuctionBlock({
  title,
  inputs,
    //@ts-expect-error
    car,
    errors,
  // onInputChange,
  // onFileChange,
  control,
    // @ts-expect-error
    register,
}: InputsBlockProps) {

  return (
    <div>
      {title && <h2 className="text-md font-bold mb-14 text-black uppercase">{title}</h2>}
      <div className="p-8 bg-pureWhite rounded-[24px] shadow-custom ">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 grid grid-cols-2 gap-4">
            {inputs.map((input) => getInput({register, input, control, errors}))}
          </div>
          <div className="col-span-1">
            <AuctionCarCard year={car.year} img={car.images[0]} make={car.make} model={car.model} price={car.price} />
          </div>
        </div>

      </div>
    </div>
  );
}
