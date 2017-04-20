'use strict';

export default class CreateTaskListController{
	constructor(taskService, $scope){
		'ngInject';

		this.taskService = taskService;
		this.tasks = taskService.getTasksList();

		$scope.$on('TASK_ADDED', (event)=>{
			this.tasks = taskService.getTasksList();
		});
	}

}