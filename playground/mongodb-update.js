//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongo');
  }
  console.log('Connected to Mongo');
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5aa68c3f53c8d1195559d692')
  }, {
    $set: {
      completed: true
    }
  }, {
      returnOriginal: false
    }).then((result) => {
    console.log(result);
  });

db.collection('Users').findOneAndUpdate({
  name: 'Rakesh'
}, {
  $set: {
    name: 'Rakesh new'
  },
  $inc: {
    age: 12
  }
}, {
    returnOriginal: false
  }).then((result) => {
  console.log(result);
});

 client.close();
});
