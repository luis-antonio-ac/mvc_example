import express from "express";
import { body, validationResult } from "express-validator";

import UserController from "./controllers/user";

const routes = express.Router();

const userController = new UserController();

routes.get("/example", (req, res) =>
  res.json({ message: "example MVC Project" })
);

routes.post(
  "/user",
  body("email").isEmail(),
  body("name").isLength({ min: 10 }),

  userController.create
);
routes.get("/users/filter", userController.filter);
routes.get("/users/:id", userController.show);
routes.get("/users", userController.index);

export { routes };
