const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDb server');

    db.collection('Todos').find({
        _id: new ObjectID('5bc0951fa4331d36f09bea2d')
    }).toArray().then((docs) => {

        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Todos').find().count().then((count) => {

        console.log(`Count Todos ${count}`);

    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({
        name:'Cristian'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    db.close();
});
