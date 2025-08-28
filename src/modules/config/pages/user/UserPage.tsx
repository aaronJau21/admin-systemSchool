import { BreadCrumComponent } from "@/components/shared/bread-crumb/BreadCrumComponent";
import { UserTable } from "../../components/user/UserTable";
import { UserDialog } from "../../components/user/UserDialog";
import { useState } from "react";

export const UserPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section>
      <BreadCrumComponent
        currentPage="Inicio"
        pathHome="/dashboard"
        secondPage="Configuracion"
        ultiPage="Usuario"
      >
        <UserDialog open={open} setOpen={setOpen} />
      </BreadCrumComponent>
      <div className="max-w-7xl mx-auto">
        <UserTable />
      </div>
    </section>
  );
};
