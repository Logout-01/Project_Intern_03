var mongoose = require ("mongoose");
var colors = require ("color");

mongoose.Promise = global.Promise;

  mongoose.connect ('mongodb://localhost/project_03', { useNewUrlParser: true });

  mongoose.connection.once ('open', function(){
    console.log(" ");
    console.log(" \x1b[1m\x1b[42m ONLINE \x1b[49m : CONNECTION ESTABLISHED" );
    console.log(" ");
  }).on('error', function(){
    console.log(" ");
    console.log(" \x1b[1m\x1b[41m OFFLINE \x1b[49m : CONNECTION ERROR" );
    console.log(" ");
  });
