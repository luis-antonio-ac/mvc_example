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

  async show(id: number) {
    const user = await db("users").select<IUser>().where({ id }).first();
    return user;
  }

  async filter(name: string) {
    const users = await db("users")
      .select<IUser[]>()
      .whereILike("name", `%${name}%`);

    return users;
  }
}
