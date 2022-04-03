import { Request, Response } from "express";
import { validationResult } from "express-validator";

import { IUser } from "../interfaces/user";
import UserModel from "../model/user";

export default class UserController {
  async create(request: Request, response: Response) {
    const errors = validationResult(request);
    if (!errors.isEmpty())
      return response.status(400).json({ errors: errors.array() });

    const { name, email } = request.body as IUser;

    const userModel = new UserModel();

    const [userIdsStored] = await userModel.create({ name, email });

    return userIdsStored
      ? response.status(201).json({
          id: userIdsStored,
          name,
          email,
        })
      : response.status(400).json({ message: "Cannot create user" });
  }

  async index(request: Request, response: Response) {
    const userModel = new UserModel();

    const users = await userModel.index();

    return response.status(200).json({ users });
  }

  async show(request: Request, response: Response) {
    const errors = validationResult(request);
    if (!errors.isEmpty())
      return response.status(400).json({ errors: errors.array() });

    const { id } = request.params;

    const userModel = new UserModel();
    const user = await userModel.show(id);

    return response.status(200).json({ user });
  }
}
