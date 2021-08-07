/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
require("dotenv").config();
import {
  Sequelize
} from "sequelize";
import fs from "fs";
import path from "path";

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
} = process.env;

const sequelize:Sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];
// const modelDefiners: any[] = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
    // (file: string) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
  // .forEach((file: any) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
const entries = Object.entries(sequelize.models);
const capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.model = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Pokemon } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
// export sequelize;
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
