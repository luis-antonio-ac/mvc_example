import express from "express";

const routes = express.Router();

routes.get("/example", (req, res) =>
  res.json({ message: "example MVC Project" })
);

export { routes };
