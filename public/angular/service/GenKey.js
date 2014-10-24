angular.module( 'morningbird' )
	.factory( 'GenKey' , [ 'DataAPI' , function( DataAPI ){
		
		var _key = { private:'' , public:'' , host:'' };
		return {
			
				key : function(){ return _key; },
				gen : function( phost , suc , err ){
					var _parm = { host:phost }
					DataAPI.get( '/getkey' , _parm , 
						function( success ){ suc( success );
						},function( error ){ err( error ) }
					);
				}
			
			}
		
	}] )