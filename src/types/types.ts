export interface InputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

export interface BlockData {
  title: string;
  inputs: {
    id: string;
    label: string;
      value: string;
    isFileInput?: boolean;
  }[];
}

export interface VehicleFormBlockProps {
  variant: "add" | "edit";
  initialData: BlockData[];
 onSave: (data: { blocks: BlockData[]; files: (File | null)[] }) => void;
}
