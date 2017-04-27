'use strict';

export default class HeaderController{
	constructor($state, enterService, taskModalService){
		'ngInject';

		let states = $state.get();

		this.states = states.filter((state) =>{
			return state.title;
		});
		this.enterService = enterService;
		this.taskModalService = taskModalService;
	}

	isLoggined() {
		return this.enterService.isLoggined();
	}

	logout() {
		this.enterService.logout();
	}

	createGroup() {
		this.taskModalService.createGroupModal();
	}

}