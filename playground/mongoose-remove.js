const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

//Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '1234'}).then((todo) => {
  console.log(todo);
})

Todo.findByIdAndRemove('abcd').then((todo) => {
  console.log(todo);
});
