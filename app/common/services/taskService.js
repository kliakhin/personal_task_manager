'use strict';

export default class TaskService {
    constructor($rootScope, storageService) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.storageService = storageService;
        this.tasksList = storageService.getTasks();
    }

    addTask(task) {
        this.tasksList.push(task);
        this.storageService.saveTasks(this.tasksList);
        this.$rootScope.$broadcast('TASK_ADDED', 0, 1, 2);
    }

    getTasksList() {
        console.log(this.tasksList);
        return angular.copy(this.tasksList);
       }

    loadTasksList() {
        return this.tasksList;
    }
}