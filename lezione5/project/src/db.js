const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "local";

async function main(collectionName) {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  // the following code examples can be pasted here...

  return collection;
}

async function getAllUsers() {
  const collection = await main("users");
  const findResult = await collection.find({}).toArray();
  console.log("FOUND", findResult);
  return findResult;
}

function closeConnection() {
  client.close();
}

module.exports.getAllUsers = getAllUsers;
module.exports.closeConnection = closeConnection;
