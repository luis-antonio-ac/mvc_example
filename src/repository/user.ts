import db from "../database/connection";
import { IUser } from "../interfaces/user";

export default class UserRepository {
  async create({ name, email }: IUser) {
    const userId = await db("users").insert({
      name,
      email,
    });

    if (!userId) return [];

    return userId;
  }

  async index() {
    const users = await db("users").select<IUser[]>();
    return users;
  }
}
