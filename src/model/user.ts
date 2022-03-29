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
}
