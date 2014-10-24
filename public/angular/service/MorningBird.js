angular.module( 'morningbird' )
	.factory( 'Morningbird' , [ 'DataAPI' , function( DataAPI ){
		
		return {
			
			sendmail : function( parm , success , error ){
				var _parm = {
					auth : { 
						service : 'Gmail', 
						auth : { 
							user : '', 
							pass : '' 
						} 
					}, 
					setting : { 
							to: 'eric.kuo@nexusguard.com' , 
							subject: 'Form morning bird office site', 
							html: parm.name + ' say : ' + parm.comment + '</br>' + parm.name + '</br> email is ' + parm.mail, 
							generateTextFromHTML: true
					}, 
					keys : { 
							public: '', 
							private: '' 
					}
				}
				DataAPI.post( '/morningbird' , _parm , 
				function( succ ){ success( succ );
				} , function( err ){ error( err ); } );
			}
			
		}
		
	}] )