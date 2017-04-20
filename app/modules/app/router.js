'use strict';

import HeaderController from './headerController.js';

import headerTemplate from './header.html';


export default ($stateProvider, $locationProvider, $urlRouterProvider)=>{
	'ngInject';

	$stateProvider
		.state('app', {
			url: '',
			abstract: true,
		  	views: {
		  		'header': {
					template: headerTemplate,
					controller: HeaderController,
					controllerAs: 'ctrl'
				},
				'main': {
					template: '<ui-view></ui-view>'
				}
		  	}
		});

}