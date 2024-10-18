const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DB_DIALECT, process.env.DB_USERNAME, process.env.DB_PASS, {
  host: process.env.DB_HOSTNAME,
  dialect: process.env.DB_DIALECT
});

module.exports.connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


