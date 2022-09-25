const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient; 

require('dotenv').config();

let _db;
const mongoConnect = (callBack) => {
  MongoClient.connect(
    process.env.MONGO_URI
  )
    .then((client) => {
      _db = client.db();
      callBack();
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

const getDb = () => {
  if (!_db) {
    throw new Error('Database is not available');
  }
  return _db;
}

module.exports = {
  mongoConnect,
  getDb,
};