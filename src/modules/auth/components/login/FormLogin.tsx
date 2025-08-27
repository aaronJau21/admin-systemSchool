import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const FormLogin = () => {
  return (
    <form className="bg-black/70 p-8 w-96 shadow-2xl rounded-xl flex flex-col gap-6 border border-green-500">
      <div className="flex flex-col items-center mb-2">
        <img src="/vite.svg" alt="Logo Colegio" className="w-16 h-16 mb-2" />
        <h2 className="text-2xl font-bold text-green-500 mb-1">
          Sistema Colegio
        </h2>
        <p className="text-gray-100 text-sm">
          Accede con tu cuenta institucional
        </p>
      </div>
      <div>
        <Label htmlFor="email" className="text-white mb-1.5 font-semibold">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          className="border border-gray-300 p-2 rounded text-white"
        />
      </div>
      <div>
        <Label htmlFor="password" className="text-white mb-1.5 font-semibold">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          className="border border-gray-300 p-2 rounded text-white"
        />
      </div>
      <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-all duration-200 shadow-md">
        Iniciar sesión
      </Button>
    </form>
  );
};
