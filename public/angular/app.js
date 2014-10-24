angular.module( 'morningbird' , [ 'ui.router' ] )
	.config( function( $stateProvider , $urlRouterProvider ){
		
		$urlRouterProvider.otherwise( '/intro' );
		$stateProvider
			.state( 'genkey' , {
				url : '/genkey' ,
				templateUrl : './view/genkey.html'
			} )
			.state( 'api' , {
				url : '/api' ,
				templateUrl : './view/api.html'
			} )
			.state( 'contact' , {
				url : '/contact' ,
				templateUrl : './view/contact.html'
			} )
			.state( 'intro' , {
				url : '/intro' ,
				templateUrl : './view/intro.html'
			} )
	}) ;