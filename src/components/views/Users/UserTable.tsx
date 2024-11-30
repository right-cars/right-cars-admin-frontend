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
} from "@nextui-org/react";

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
          classNames={{thead:'custom-table'}}
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
        <TableColumn key="status">status</TableColumn>
        <TableColumn key="mail">email</TableColumn>
        <TableColumn key="phone">phone number</TableColumn>
        <TableColumn key="deposit">deposit</TableColumn>
      </TableHeader>
      <TableBody items={items ?? []}>
        {(item) => (
          <TableRow key={item?.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
