"use client";
import { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  addingDate: string;
  status: string;
  mail: string;
  phone: string;
  deposit: string;
  regular: boolean;
  dealer: boolean;
  archive: boolean;
}

interface Users {
  data: User[];
}

const getStatusColor = (status: string): string => {
  const normalizedStatus = status.trim().toLowerCase();
  switch (normalizedStatus) {
    case "verified":
      return "text-green-600";
    case "in progress":
      return "text-blue";
    case "no documents":
      return "text-orange-500";
    default:
      return "text-blue-500";
  }
};

export default function UsersTable({ data }: Users) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 9;

  const pages = Math.ceil(data.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start, end);
  }, [page, data]);

  return (
    <Table
      className="custom-table"
      classNames={{
        thead: "custom-thead",
        tr: "bg-pureWhite",
      }}
      color="primary"
      aria-label="Example table with client async pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            page={page}
            total={pages}
            onChange={(page: number) => setPage(page)}
            classNames={{ cursor: "w-[32px] h-[40px]" }}
          />
        </div>
      }
    >
      <TableHeader className="table-head">
        <TableColumn key="name">Name</TableColumn>
        <TableColumn key="addingDate">Date of adding</TableColumn>
        <TableColumn key="status">Status</TableColumn>
        <TableColumn key="mail">Email</TableColumn>
        <TableColumn key="phone">Phone number</TableColumn>
        <TableColumn key="deposit">Deposit</TableColumn>
        <TableColumn key="details"> </TableColumn>
      </TableHeader>
      <TableBody items={items ?? []}>
        {(item) => (
          <TableRow key={item?.id}>
            {(columnKey) => {
              if (columnKey === "status") {
                return (
                  <TableCell>
                    <span className={getStatusColor(item?.status)}>
                      {item?.status}
                    </span>
                  </TableCell>
                );
              }
              if (columnKey === "details") {
                return (
                  <TableCell>
                    <Button
                      as={Link}
                      href={`/users/${item.id}`}
                      radius="full"
                      color="primary"
                      variant="flat"
                    >
                      view profile
                    </Button>
                  </TableCell>
                );
              }
              return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
