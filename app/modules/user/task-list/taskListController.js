'use strict';

export default class UserListController{
	constructor(taskService, enterService, $state){
		'ngInject';

		this.taskList = taskService.getTasksList();
		this.enterService = enterService;
		this.$state = $state;
		this._isLoggined();

	}

	_isLoggined(){
		if (!this.enterService.isLoggined()){
			this.$state.go('app.home');
		}
	}
}














