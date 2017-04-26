'use strict';

export default class CreateTaskListController{
	constructor(taskService, $scope){
		'ngInject';
		this.taskService = taskService;
		this.tasksList = taskService.getTasksList();

		$scope.$on('TASK_ADDED', (event)=>{
			this.tasksList = taskService.getTasksList();
		});
	}

}