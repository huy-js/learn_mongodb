const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//Connect to mongodb

before(function(done) {
    mongoose.connect('mongodb://localhost/testdb');

    mongoose.connection.once('open', function () {
        console.log("Connection is established!");
        done();
    }).on('error', function (error) {
        console.log("Error: ", error);
    });
})


