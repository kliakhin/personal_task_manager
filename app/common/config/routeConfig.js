'use strict';

export default ($locationProvider, $urlRouterProvider)=>{
	'ngInject';

	$locationProvider.hashPrefix("!");
	$urlRouterProvider.otherwise('/home');
}