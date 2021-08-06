// external imports
const dotenv = require('dotenv');

// Declaration
dotenv.config();

module.exports = {
    mongoUri: process.env.MONGO_URL,
    port : process.env.PORT,
    db_name:process.env.DATABASE_NAME
};