import {Control} from "react-hook-form";

export interface InputProps {
  label?: string;
  value?: string;
  control?: Control;
  name?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  errors: object | undefined;
}

export interface BlockData {
  title: string;
  inputs: {
    id: string;
    label: string;
    value: string;
    name: string;
    isFileInput?: boolean;
    toggle?: boolean;
  }[];
}

export interface VehicleFormBlockProps {
  variant: "add" | "edit";
  initialData: BlockData[];
  initialMainImage: File | string | null,
  initialImages?: (File | string | null)[];
  initialVideoUrl?: string;
  id?: string;
}
