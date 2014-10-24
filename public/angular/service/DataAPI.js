angular.module( 'morningbird' )
	.factory( 'DataAPI' , [ '$http' , function( $http ){
		
		return {
			post : function( url , parms , success , error ){
					$http( { method:'POST' , url:url , data:parms } )
					.success( success )
					.error( error )
				},
			get : function( url , parms , success , error ){
					$http( { method:'GET' , url:url , params:parms } )
					.success( success )
					.error( error )
				}
		}
		
	}] );