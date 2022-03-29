import { Knex } from "knex";
import path from "path";
import { config } from "./src/database/connection";

module.exports = {
  development: {
    ...config,
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
  },
} as Knex.Config;
