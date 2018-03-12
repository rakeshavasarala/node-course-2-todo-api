//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Rakesh', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongo');
  }
  console.log('Connected to Mongo');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Todo 3'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  //db.collection('Users').deleteMany({name: 'Andrew'});

  //db.collections('Users').findOneAndDelete({});

  client.close();
});
