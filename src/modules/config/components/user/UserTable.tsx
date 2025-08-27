import { useQuery } from "@tanstack/react-query";
import { UserService } from "../../services";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { columns } from "./columns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const UserTable = () => {
  const { data: user } = useQuery({
    queryKey: ["users"],
    queryFn: UserService.getUsers,
  });

  const table = useReactTable({
    data: Array.isArray(user) ? user : user ? [user] : [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (user)
    return (
      <div className="overflow-x-auto rounded-lg border bg-background shadow-md p-4">
        <Table className="min-w-[700px] border-separate border-spacing-0">
          <TableHeader className="bg-muted">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="px-4 py-3 text-left font-semibold text-muted-foreground bg-muted border-b"
                  >
                    {header.isPlaceholder
                      ? null
                      : (header.column.columnDef.header as string)}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-accent transition-colors border-b"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-4 py-2 text-sm">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
};
