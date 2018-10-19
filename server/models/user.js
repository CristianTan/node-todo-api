var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    }
});

// var newUser = new User({
//     email: 'cristian@cc.com'
// });
// newUser.save().then((res) => {
//     console.log(JSON.stringify(res, undefined, 2));
// }, (err) => {
//     console.log('Unable to save',err);
// });

module.exports = {User};
