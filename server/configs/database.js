const mongoose = require('mongoose');

const uri = `mongodb+srv://vassdeniss:${process.env.MONGO_PASSWORD}@maincluster.zmsuenl.mongodb.net/brickview`;

async function connectDb() {
  mongoose.connect(uri);
}

module.exports = connectDb;
