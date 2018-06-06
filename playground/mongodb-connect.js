// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (error, client) =>{
  assert.equal(null, error);
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert todo', error);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('Users').insertOne({
  //   name: 'YuBin',
  //   age: 32,
  //   location: 'Beijing'
  // }, (error, result) => {
  //   assert.equal(null, error);
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  client.close();
});