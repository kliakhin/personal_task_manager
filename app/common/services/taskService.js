'use strict';

export default class TaskService {
    constructor($rootScope, storageService) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.storageService = storageService;
        this.tasksList = storageService.getTasksList();
    }

    createTask(task) {
        task.done = false;
        this.storageService.createTask(task);
        this.$rootScope.$broadcast('TASK_ADDED', 0, 1, 2);
    }

    updateTask(task) {
        this.storageService.updateTask(task);
        this.$rootScope.$broadcast('TASK_UPDATED', 0, 1, 2);

    }

    getTasksList() {
        return angular.copy(this.tasksList);
    }
}
