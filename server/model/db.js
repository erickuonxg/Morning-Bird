var mongoose = require( 'mongoose' ),
	setting = require( '../config/server.js' );
module.exports = { connect:connect }
function connect(){
	mongoose.connection.once( 'open' , function(){
		console.log( 'already connected to db.' );
		initSchema();
	});
	mongoose.connect( 'mongodb://localhost/'+setting.db );
	return mongoose;
}

function initSchema(){
	mongoose.model( 'Key' , new mongoose.Schema(
		{
			private: 'string' , 
			public: 'string' , 
			host: 'string'
		}
	) );
}