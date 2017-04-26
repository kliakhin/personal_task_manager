'use strict';

export default class TaskListController {
    constructor(taskModalService, taskService, enterService, $state, $scope) {
        'ngInject';

        this.taskList = taskService.getTasksList();
        this.enterService = enterService;
        this.$state = $state;
        this.taskModalService = taskModalService;

        $scope.$on('TASK_ADDED', (event)=> {
            this.taskList = taskService.getTasksList();
        });
    }

    createNewTask() {
        this.taskModalService.createTaskModal();
    }

    markAsDone(index) {
        var task = this.taskList[index];

    }
}














