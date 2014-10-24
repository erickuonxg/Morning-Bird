var mailer = require( 'nodemailer' ),
	extend = require( 'util' )._extend,
	crypto = require('crypto'),
	mongoose = require( 'mongoose' );
	
var morningbird = mailer.createTransport();
var _mail_from = 'g2@nexusguard.com';

module.exports = function( app ){
	
	app.get( '/' , function( req,res ){ 
		res.render( 'index' , { title:'Morning Bird!' , layout:'layout/layout.ejs' }  )
	} );
	
	app.get( '/getkey' , function( req ,res ){ 
		mongoose.model( 'Key' ).findOne( { host : req.query.host } , function( err , key ){
			if( err ) return res.send( err );
			if( key ) return res.send( key );
			if( !key ) {
				var _pubkey = '';
				var _prikey = '';
				crypto.randomBytes( 3 , function( ex1, buf1 ){
						_pubkey = buf1.toString('hex');
					crypto.randomBytes( 3 , function( ex2, buf2 ){
						_prikey = buf2.toString('hex');
						createKey( _pubkey , _prikey );  //inser in db.
					});
				});
			}
			var createKey = function( pub , pri ){
				mongoose.model( 'Key' ).create( { public:pub , private:pri , host:req.query.host } , function( err,key ){
					if( err ) res.send( err );
					if( key ) res.send( key );
				});
			}
		});
	});
	
	app.post( '/morningbird' , function( req , res ){
		var _rb = req.body;
		mongoose.model( 'Key' ).findOne( {host:req.headers.host} , function( err , key ){
			if( err ) return res.send( { err:err } );
			if( !key ) return res.send( { err:{ msg:'Your host has not registered on morning bird.' } } );
			if( key ){
				if( _rb.keys.public == key.public && _rb.keys.private == key.private ){
					_sendmail();
				}else return res.send( { err:{ msg:'Key is incorrect, please get correct keys and try again later!' } } );
			}
		})
		var _sendmail = function(){
			var _mail_option = extend( {from:_mail_from} , _rb.setting );
			if( _rb.auth ) morningbird = mailer.createTransport( _rb.auth );
			morningbird.sendMail( _mail_option , function( err , info ){
				if ( err ) return res.send( err );
				if ( info ) return res.send( info );
			});
		}
	});
}