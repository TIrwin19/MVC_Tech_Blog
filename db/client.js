const { Sequelize } = require('sequelize')
const client = new Sequelize(
  'tech_blog_db', // Database name
  'postgres', //Postgress server
  'pass', { // Postgres server password
  host: 'localhost',
  dialect: 'postgres'
})
module.exports = client