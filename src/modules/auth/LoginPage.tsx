import { FormLogin } from "./components/login/FormLogin";

export const LoginPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[url(/login.png)] bg-cover bg-center bg-no-repeat">
      <FormLogin />
    </div>
  );
};
