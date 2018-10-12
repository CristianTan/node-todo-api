const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDb server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Something to test'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    //
    // db.collection('Users').deleteMany({name: 'Cristian'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({ _id: new ObjectID('5bc09f2c1712efbbe6409f9d')}).then((result) => {
    //     console.log(result);
    // });



    db.close();
});
