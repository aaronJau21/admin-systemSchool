import type { ColumnDef } from "@tanstack/react-table";
import { useMutation, useQueryClient } from "@tanstack/react-query";


import type { IUser } from "../../interfaces";
import { UserService } from "../../services";
import { Badge } from "@/components/ui/badge";
import { UserDialogUpdate } from "./UserDialogUpdate";



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
    accessorKey: "phone",
    header: "Teléfono",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const user = row.original as IUser;

      const StatusBadge = ({ user }: { user: IUser }) => {
        const queryClient = useQueryClient();
        const { mutateAsync } = useMutation({
          mutationFn: () => UserService.updateStatusUser(user.id),
          onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["users"] });
          },
        });

        const handleClick = async () => {
          try {
            await mutateAsync();
          } catch (err) {
            console.error(err);
          }
        };

        return (
          <Badge variant={user.status ? "outline" : "destructive"} asChild>
            <button
              onClick={handleClick}
              className={`${
                user.status ? "bg-green-500" : "bg-red-500"
              } cursor-pointer px-2 py-0.5 rounded-md text-xs font-medium`}
            >
              {user.status ? "Activo" : "Desactivado"}
            </button>
          </Badge>
        );
      };

      return <StatusBadge user={user} />;
    },
  },
  {
    header: "Acciones",
    cell: ({ row }) => <UserDialogUpdate user={row.original} />
  },
];
