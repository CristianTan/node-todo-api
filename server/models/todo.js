var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: 'Cook dinner          ',
//     // text: '',
//     // completed: false,
//     // completedAt: 766
// });
//
// newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log('Unable to save',err);
// });

module.exports = {
    Todo
};
