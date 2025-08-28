import { TbPencilCog } from "react-icons/tb";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { ICreateUserRequest, IUser } from "../../interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "../../services";
import { useForm, type SubmitHandler } from "react-hook-form";

export const UserDialogUpdate = ({ user }: { user: IUser }) => {
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);

  const { register, handleSubmit } = useForm<ICreateUserRequest>({
    defaultValues: {
      email: user.email,
      name: user.name,
      father_lastname: user.father_lastname,
      mother_lastname: user.mother_lastname,
      phone: user.phone,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: Partial<ICreateUserRequest>) =>
      UserService.updateUser(user.id, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["users"] });
      setOpen(false);
    },
  });

  const onSubmit: SubmitHandler<ICreateUserRequest> = (data) => {
    mutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          <TbPencilCog size={15} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Usuario</DialogTitle>

          <form
            className="mt-3.5 flex flex-col gap-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="mb-2" htmlFor="name">
                  Nombres:
                </Label>
                <Input
                  type="text"
                  id="name"
                  required
                  className="border-2 border-black"
                  {...register("name")}
                />
              </div>
              <div>
                <Label className="mb-2" htmlFor="father_lastname">
                  Apellido Paterno:
                </Label>
                <Input
                  type="text"
                  id="father_lastname"
                  required
                  className="border-2 border-black"
                  {...register("father_lastname")}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="mb-2" htmlFor="mother_lastname">
                  Apellido Materno:
                </Label>
                <Input
                  type="text"
                  id="mother_lastname"
                  required
                  className="border-2 border-black"
                  {...register("mother_lastname")}
                />
              </div>
              <div>
                <Label className="mb-2" htmlFor="email">
                  Correo electrónico:
                </Label>
                <Input
                  type="email"
                  id="email"
                  required
                  className="border-2 border-black"
                  {...register("email")}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="mb-2" htmlFor="phone">
                  Teléfono:
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  required
                  className="border-2 border-black"
                  {...register("phone")}
                />
              </div>
            </div>

            <div className="col-span-2 mt-1.5">
              <Button type="submit" className="w-full cursor-pointer">
                Guardar
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
