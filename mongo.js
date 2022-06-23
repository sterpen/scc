const { MongoClient } = require('mongodb');
const util = require('util');

util.promisify(MongoClient.connect);

let dbConnection;

const connect = async () => {
  try {
    const client = await MongoClient.connect('mongodb+srv://7amada:7amada@scc.t2ukjop.mongodb.net/?retryWrites=true&w=majority');
    dbConnection = client.db('SCC');
  } catch (e) {
    throw new Error(`Could not establish database connection: ${e}`);
  }
};

const mongoClient = async () => {
  if (!dbConnection) {
    await connect();
  }
  return dbConnection;
};

module.exports = {
  mongoClient,
};