var express = require('express')
  , routes = require('./routes')
  , db = require( './server/model/db.js' ).connect();

var app = module.exports = express.createServer();
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.router( routes ) );
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


app.listen(8080);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
