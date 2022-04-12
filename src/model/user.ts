import * as EmailValidator from "email-validator";
import UserRepository from "../repository/user";
import { IUser } from "../interfaces/user";

export default class UserModel {
  async create({ name, email }: IUser): Promise<number[]> {
    if (name.length === 0) return [];
    if (!EmailValidator.validate(email)) return [];

    const userRepository = new UserRepository();
    return await userRepository.create({ name, email });
  }

  async index() {
    const userRepository = new UserRepository();
    return await userRepository.index();
  }

  async show(id: number | string) {
    const parsedId = Number(id);
    if (isNaN(parsedId)) return {};

    const userRepository = new UserRepository();
    const user = await userRepository.show(parsedId);

    return typeof user === "object" ? user : {};
  }

  async filter(name: string | undefined) {
    if (!name) return [];
    if (name.length === 0) return [];

    const userRepository = new UserRepository();
    return await userRepository.filter(name);
  }
}
