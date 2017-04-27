'use strict';

export default class TaskService {
    constructor($rootScope, storageService) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.storageService = storageService;
        this.tasksList = storageService.getTasksList();
        this.groupsList = storageService.getGroupsList();
    }

    createTask(task) {
        task.done = false;
        task.id = this.generateUUID();
        this.tasksList.push(task);
        this.storageService.createTask(this.tasksList);
        this.$rootScope.$broadcast('TASK_ADDED', 0, 1, 2);
    }

    createGroup(group) {
        this.storageService.createGroup(group);
        this.$rootScope.$broadcast('GROUP_ADDED', 0, 1, 2);
    }

    updateTask(task) {
        this.storageService.updateTask(task);
        this.$rootScope.$broadcast('TASK_UPDATED', 0, 1, 2);
    }

    deleteTask(task) {
        for (var i = 0; i < this.tasksList.length; i++) {
            if (this.tasksList[i].id == task.id) {
                this.tasksList.splice(i, 1);
            }
        }
        this.storageService.deleteTask(this.tasksList);
        this.$rootScope.$broadcast('TASK_DELETED', 0, 1, 2);

    }

    getTasksList() {
        return this.tasksList;
    }

    setFilteredTasks(tasks) {
        this.tasksList = tasks;
        this.$rootScope.$broadcast('TASK_FILTERED', 0, 1, 2);
    }

    getGroupsList() {
        return this.groupsList;
    }

    generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}
