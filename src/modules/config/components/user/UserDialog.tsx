import { useState } from "react";

import { useForm, type SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ICreateUserRequest } from "../../interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserService } from "../../services";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const UserDialog = ({ setOpen, open }: Props) => {
  const [disableSave, setDisableSave] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: UserService.createUser,
  });

  const { register, handleSubmit, reset } = useForm<ICreateUserRequest>();

  const onSubmit: SubmitHandler<ICreateUserRequest> = async (data) => {
    if (!data) return;

    setDisableSave(true);

    try {
      // wait for the user creation to finish before invalidating the users query
      await mutateAsync(data);

      await queryClient.invalidateQueries({ queryKey: ["users"] });
      setOpen(false);
    } catch (error) {
      console.error(error);
    } finally {
      setDisableSave(false);
      // reset form fields after submit attempt
      reset();
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        // when dialog closes, clear the form
        if (!value) reset();
      }}
    >
      <DialogTrigger className="bg-green-500 px-3 py-1 rounded hover:bg-green-600 transition-colors cursor-pointer">
        Agregar usuario
      </DialogTrigger>
      <DialogContent className="bg-gray-300">
        <DialogHeader>
          <DialogTitle>Agregar usuario</DialogTitle>
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
              <div>
                <Label className="mb-2" htmlFor="password">
                  Contraseña:
                </Label>
                <Input
                  type="password"
                  id="password"
                  required
                  className="border-2 border-black"
                  {...register("password")}
                />
              </div>
            </div>

            <div className="col-span-2 mt-1.5">
              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={disableSave}
              >
                Guardar
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
