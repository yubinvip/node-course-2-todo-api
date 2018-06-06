const { MongoClient, ObjectID } = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (error, client) =>{
  assert.equal(null, error);
  console.log('Connected to MongoDB server');

  // const db = client.db('TodoApp');
  // db.collection('Todos').find({_id: new ObjectID('5b17930a89af962308562e12')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  const db = client.db('TodoApp');
  db.collection('Users').find({name: 'YuBin'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });
  // client.close();
});