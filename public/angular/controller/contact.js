angular.module( 'morningbird' )
	.controller( 'contactController' , [ '$scope' , 'Morningbird' , function( $scope , Morningbird ){
		
		$scope.name = '';
		$scope.mail = '';
		$scope.comment = ''
		$scope.status = '';
		$scope.sending = false;
		
		$scope.sendmail = function(){
			if( $scope.name == '' ) return $scope.status = 'please enter your name.'
			if( $scope.mail == '' ) return $scope.status = 'please enter your mail.'
			if( $scope.comment == '' ) return $scope.status = 'please enter your comment.'
			
			$scope.sending = true;
			var _parm = { name:$scope.name , mail:$scope.mail , comment:$scope.comment };
			Morningbird.sendmail( _parm , function( success ){
				$scope.sending = false;
				$scope.status = success ;
				$scope.name = '';
				$scope.mail = '';
				$scope.comment = ''
			} , function( err ){
				$scope.sending = false;
				$scope.status = err;
			});
			
		}
		
	}] );