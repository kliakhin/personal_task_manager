'use strict';

export default class CreateTaskController{
	constructor(taskService, enterService, $state){
		'ngInject';
		this.taskService = taskService;
		this.enterService = enterService;
		this.$state = $state;
		this.task = {};
		this._isLoggined();
	}

	_isLoggined(){
		if (!this.enterService.isLoggined()){
			this.$state.go('app.home');
		}
	}

	addTask(){
		let task = this.task;
		this.taskService.addTask(task);
	}
}