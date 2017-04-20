'use strict';

import HomeCtrl from './homeController.js';

import homeTemplate from './home.html';


export default ($stateProvider, $locationProvider, $urlRouterProvider)=>{
	'ngInject';

	$stateProvider
		.state('app.home', {
			url: '/home',
			title: 'Home',
		  	template: homeTemplate,
		  	controller: HomeCtrl,
		  	controllerAs: 'ctrl'
		});

}