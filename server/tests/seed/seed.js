const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
  _id: userOneId,
  email: 'testUser1@example.com',
  password: 'testUser1',
  tokens: [{
    access: 'auth',
    token: jwt.sign({userOneId, userOneId, access: 'auth'}, 'secretValue').toString()
  }]
}, {
  _id: userTwoId,
  email: 'testUser2@example.com',
  password: 'testUser2'
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First text todo'
}, {
  _id: new ObjectID(),
  text: 'Second text todo',
  completed: true,
  completedAt: 23456543
}];

const populateTodos =  (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done()).catch((e) => {console.log(e)});
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done()).catch((e) => {
    console.log(e);
  });
};

module.exports = {todos, populateTodos, users, populateUsers};
