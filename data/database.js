const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb://user:pass@mongodb`
  );
  database = client.db('blog');
}

function getDb() {
  if (!database) {
    throw { message: 'You must connect first!' };
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
