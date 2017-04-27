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
            console.log("added");
            this.taskList = taskService.getTasksList();
        });
        $scope.$on('TASK_UPDATED', (event)=> {
            this.taskList = taskService.getTasksList();
        });
        $scope.$on('TASK_FILTERED', (event)=> {
            this.taskList = taskService.getTasksList();
        });
        $scope.$on('TASK_DELETED', (event)=> {
            this.taskList = taskService.getTasksList();
        });
    }

    createNewTask() {
        this.taskModalService.createTaskModal();
    }

    editTask(index) {
        var task = this.taskList[index];
        this.taskModalService.editTaskModal(task);
    }

    deleteTask(index) {
        var task = this.taskList[index];
        this.taskService.deleteTask(task);
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














