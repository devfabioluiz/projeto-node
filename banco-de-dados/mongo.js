const clientPromise = require("./config");

const DB_NAME = "jplima_db";

async function getDB() {
  const client = await clientPromise;
  return client.db(DB_NAME);
}

async function getCollection(collectionName) {
  const db = await getDB();
  return db.collection(collectionName);
}

module.exports = {
  getDB,
  getCollection,
};