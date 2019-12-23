const knex = require('knex');
const knexConfig = (add in knex file);
const env = process.env.DB_ENV||'development';

module.exports= knex(knexConfig[env]);