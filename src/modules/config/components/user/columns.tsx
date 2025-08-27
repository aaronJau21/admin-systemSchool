import type { ColumnDef } from "@tanstack/react-table";
import type { IUser } from "../../interfaces";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "father_lastname",
    header: "Apellido Paterno",
  },
  {
    accessorKey: "mother_lastname",
    header: "Apellido Materno",
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "email",
    header: "Correo Electrónico",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ cell }) => {
      const value = cell.getValue() as boolean;
      return (
        <Badge variant={value ? "secondary" : "destructive"} className="bg-green-500">
          {value ? "Activo" : "Desactivado"}
        </Badge>
      );
    },
  },
];
