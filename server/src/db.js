require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
//const {
//  DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME,
//} = process.env;

//`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

const DB_USER = "postgres";
const DB_PASSWORD = "Aleja3415a12.";
const DB_HOST = "localhost" ;
const DB_PORT = 5432 ;
const DB_NAME = "countriess";

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
//  logging: false, 
//  native: false, 
//});
const sequelize = new Sequelize(DB_NAME, DB_USER , DB_PASSWORD, {
  host: DB_HOST, //host
  port: DB_PORT, //port
  dialect: 'postgres'
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Country, Activity} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Country.belongsToMany(Activity, {through : "countries_activities"});
Activity.belongsToMany(Country, {through : "countries_activities"});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};