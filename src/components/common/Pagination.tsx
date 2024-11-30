import { Pagination } from "@nextui-org/react";

interface Pagination {
  total: number;
  initialPage: number;
  onChange: (page: number) => void;
}

export default function CustomPagination({
  total,
  initialPage,
  onChange,
}: Pagination) {
  return (
    <Pagination
      radius="sm"
      variant="light"
      showControls
      total={total}
      initialPage={initialPage}
      onChange={(page) => onChange(page)}
      classNames={{ cursor: "w-[32px] h-[40px]" }}
    />
  );
}
