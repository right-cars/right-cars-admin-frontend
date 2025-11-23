import Image from "next/image";

interface RemoveProps {
  removeImage: (index: number) => void;
  index: number;
}
export default function RemoveBtn({ removeImage, index }: RemoveProps) {
  return (
    <button
      type="button"
      onClick={() => removeImage(index)}
      className="absolute top-1 right-1"
    >
      <Image
        src="/icons/close-circle.svg"
        alt="close icon"
        width={24}
        height={24}
      />
    </button>
  );
}
