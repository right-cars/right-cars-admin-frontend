import Image from "next/image";

interface RemoveProps {
  removeImage: () => void;
}
export default function RemoveBtn({ removeImage }: RemoveProps) {
  return (
    <button
      type="button"
      onClick={removeImage}
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
