'use strict';

export default class TaskListController {
    constructor(taskModalService, taskService, enterService, $state, $scope) {
        'ngInject';

        this.taskList = taskService.getTasksList();
        this.enterService = enterService;
        this.$state = $state;
        this.taskModalService = taskModalService;
        this.taskService = taskService;

        $scope.$on('TASK_ADDED', (event)=> {
            console.log("event1");
            this.taskList = taskService.getTasksList();
        });

        $scope.$on('TASK_UPDATED', (event)=> {
            console.log("event2");
            this.taskList = taskService.getTasksList();
        });
    }

    createNewTask() {
        this.taskModalService.createTaskModal();
    }

    editTask(index) {
        var task = this.taskList[index];
        this.taskModalService.editTaskModal(angular.copy(task));
    }

    markAsDone(index) {
        var task = this.taskList[index];
        task.done = true;
        this.taskService.updateTask(task);
    }

    markAsNotDone(index) {
        var task = this.taskList[index];
        task.done = false;
        this.taskService.updateTask(task);
    }
}














