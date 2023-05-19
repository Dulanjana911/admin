"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllLogs } from "@/lib/api";

import {
  Row,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import { Log } from "@/types/core";

const columnHelper = createColumnHelper<Log>();

const columns = [
  columnHelper.accessor("pid", {
    cell: (ctx) => ctx.getValue(),
    header: "PID",
  }),
  columnHelper.accessor("rfid", {
    cell: (ctx) => ctx.getValue(),
    header: "RFID",
  }),
  columnHelper.accessor("uname", {
    cell: (ctx) => ctx.getValue(),
    header: "Name",
  }),
  columnHelper.accessor("vmodel", {
    cell: (ctx) => ctx.getValue(),
    header: "Vehicle Model",
  }),
  columnHelper.accessor("action", {
    cell: (ctx) => ctx.getValue(),
    header: "Action",
  }),
  columnHelper.accessor("time", {
    cell: (ctx) => ctx.getValue(),
    header: "Timestamp",
  }),
  
];

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["logs"],
    queryFn: getAllLogs,
    refetchInterval:1000
  });

  const table = useReactTable({
    data: data as Log[],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-lg">Logs</h1>
      <div className="mt-4">
        <table className="rounded-md border-separate  table-auto">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-slate-200">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-left px-4 py-2  rounded-md "
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className=" px-4 py-2  rounded-md">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
