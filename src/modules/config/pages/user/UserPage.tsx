import { BreadCrumComponent } from "@/components/shared/bread-crumb/BreadCrumComponent";
import { UserTable } from "../../components/user/UserTable";

export const UserPage = () => {
  return (
    <section>
      <BreadCrumComponent
        currentPage="Inicio"
        pathHome="/dashboard"
        secondPage="Configuracion"
        ultiPage="Usuario"
      />
      <div className="max-w-7xl mx-auto">
        <UserTable />
      </div>
    </section>
  );
};
