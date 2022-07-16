require("dotenv").config({ path: ".env" });
const { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD, DB_DIALECT } = process.env;

let host = process.env.DB_HOST;
let user = process.env.DB_USER;
let name = process.env.DB_NAME;
let password = process.env.DB_PASSWORD;
let dialect = process.env.DB_DIALECT;

console.log(host);
console.log(user);
console.log(name);
console.log(password);
console.log(dialect);

module.exports = {
  development: {
    username: DB_HOST,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
