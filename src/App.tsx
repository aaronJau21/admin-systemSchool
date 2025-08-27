import { BrowserRouter, Route, Routes } from "react-router";
import { LoginPage } from "./modules/auth/LoginPage";
import { HomePage } from "./modules/home/HomePage";
import { MainLayout } from "./layouts/MainLayout";
import type { JSX } from "react";
import { UserPage } from "./modules/config/pages/user/UserPage";

export interface AppRoutes {
  title: string;
  path?: string;
  element?: JSX.Element;
  children?: AppRoutes[];
}

export const routes: AppRoutes[] = [
  {
    title: "Inicio",
    path: "",
    element: <HomePage />,
  },
  {
    title: "Configuración",
    path: "configuration",
    children: [
      {
        title: "User",
        path: "user",
        element: <UserPage />,
      },
    ],
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LoginPage />} />

        <Route path="dashboard" element={<MainLayout />}>
          {routes.map((route) =>
            route.children ? (
              <Route path={route.path} key={route.path}>
                {route.children.map((child) => (
                  <Route
                    path={child.path}
                    element={child.element}
                    key={child.path}
                  />
                ))}
              </Route>
            ) : (
              <Route path={route.path} element={route.element} />
            )
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
