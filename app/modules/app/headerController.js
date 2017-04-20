'use strict';

export default class HeaderController{
	constructor($state, enterService){
		'ngInject';

		let states = $state.get();

		this.states = states.filter((state) =>{
			return state.title;
		});
		this.enterService = enterService;
	}

	isLoggined() {
		return this.enterService.isLoggined();
	}

}