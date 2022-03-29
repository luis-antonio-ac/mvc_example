import db from "../database/connection";
import { IUSer } from "../interfaces/user";

export default class UserRepository {
  async create({ name, email }: IUSer) {
    const userId = await db("users").insert({
      name,
      email,
    });

    if (!userId) return false;

    return true;
  }
}
