/*global res*/
'use strict';
const { mongoClient } = require('./mongo');
module.exports.persist = async (event) => {
  const db = await mongoClient();
  if (!db) res.status(500).send('Mongo DB Unavailable');
  await db.collection('SCC').insertOne(event);
  return {
    statusCode: 200,
    body: JSON.stringify(event),
  };

};
