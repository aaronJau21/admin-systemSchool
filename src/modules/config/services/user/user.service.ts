import { api } from "@/lib/axios";
import type { ICreateUserRequest, IUser } from "../../interfaces";

export class UserService {
  public static async getUsers(): Promise<IUser> {
    const { data } = await api.get("/user");
    return data;
  }

  public static async createUser(user: ICreateUserRequest): Promise<IUser> {
    const { data } = await api.post("/user", user);
    return data;
  }
}
