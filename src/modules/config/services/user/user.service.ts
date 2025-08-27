import { api } from "@/lib/axios";
import type { IUser } from "../../interfaces";

export class UserService {
  public static async getUsers(): Promise<IUser> {
    const { data } = await api.get("/user");
    return data;
  }
}
