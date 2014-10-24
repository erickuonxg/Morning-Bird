angular.module( 'morningbird' )
	.controller( 'getkey_controller' , [ '$scope' , 'DataAPI' , 'GenKey' , function( $scope , DataAPI , GenKey ){
		
		$scope.host = '';
		$scope.key = {};
		$scope.getKey = function(){
			GenKey.gen( $scope.host , function( success ){
				$scope.host = '';
				$scope.key = success;
			} , function(err){ alert( err ) });
		}
		
	}] )
	
	.controller( 'apiController' , [ '$scope' , '$location' , '$anchorScroll' , function( $scope , $location, $anchorScroll  ){
		$scope.back2Top = function(){
			$location.hash('container_top');
			$anchorScroll();
		}
	}] )