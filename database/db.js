const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "node_auth_pg",
  username: "postgres",
  password: "admin",
});

module.exports = sequelize;
