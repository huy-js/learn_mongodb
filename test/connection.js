import mongoose from 'mongoose';

//Connect to mongodb
mongoose.connect('mongodb://localhost/testdb');

mongoose.connection.once('open',function(){
    console.log("Connection is established!");
}).on('error',function(error){
    console.log("Error: ", error);
});