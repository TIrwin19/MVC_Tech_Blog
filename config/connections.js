const Sequelize = require('sequelize');
// Sequelize connection to the database that is used by heroku to host the webside on their servers and keep my information protected
const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL,
    {
      dialectOptions: { //SSL used specifically for heroku hosting
        ssl: { 
          require: true,
          rejectUnauthorized: false
        }
      }
    })
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;