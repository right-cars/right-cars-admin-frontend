export interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export interface BlockData {
  title: string;
  inputs: {
    id: string;
    label: string;
    value: string;
  }[];
}

export interface AddVehicleFormBlockProps {
  initialData: BlockData[];
  onSave: (data: BlockData[]) => void;
}