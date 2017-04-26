'use strict';

export default class TaskController{
	constructor(task, $state){
		'ngInject';

		this.task = task;

		if(!this.task){
			$state.go('app.user.tasksList');
		}
	}

}