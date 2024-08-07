// db.js
const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
    });
    console.log(`MongoDB Connected: ${mongoose.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(
      `Error in connection BD: ${error.message}`.red.underline.bold
    );
    process.exit(1);
  }
};

module.exports = connectDB;
