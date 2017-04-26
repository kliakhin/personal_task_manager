'use strict';

export default class TaskService {
    constructor($rootScope, storageService) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.storageService = storageService;
        this.tasksList = storageService.getTasksList();
    }

    createTask(task) {
        this.storageService.createTask(task);
        this.$rootScope.$broadcast('TASK_ADDED', 0, 1, 2);
    }

    getTasksList() {
        console.log("tasks", this.tasksList);
        return angular.copy(this.tasksList);
    }
}