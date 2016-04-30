var mongo = require('mongodb'),
    mongoose = require('mongoose');
// bind_ip=127.0.0.1;
mongoose.connect('mongodb://localhost/enviro',function(err){
  if(err){
    console.log("There has been an error.")
  } else {
    console.log('Mongoose successfully connected.')
  }
});
// var db = mongoose.connection;
