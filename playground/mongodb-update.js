const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDb server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5bc0a3df1712efbbe640a0a2')
    },{
        $set: {
            completed: true,
            text: 'Have fun'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bc09c091712efbbe6409eef')
    },{
        $set: {
            name: 'Gica'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    db.close();
});
