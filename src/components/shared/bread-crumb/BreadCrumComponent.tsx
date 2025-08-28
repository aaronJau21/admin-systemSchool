import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NavLink } from "react-router";

interface Props {
  pathHome: string;
  currentPage: string;
  secondPage: string;
  ultiPage: string;
  children?: React.ReactNode;
}

export const BreadCrumComponent = ({
  pathHome,
  currentPage,
  secondPage,
  ultiPage,
  children,
}: Props) => {
  return (
    <div className="max-w-11/12 mx-auto mb-3 flex justify-between">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <NavLink to={pathHome}>{currentPage}</NavLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{secondPage}</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{ultiPage}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {children}
    </div>
  );
};
