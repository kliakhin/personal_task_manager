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

    deleteTask(task) {
        /*for (var i = 0; i < this.tasksList.length; i++) {
            if (this.tasksList[i].id == task.id) {
                this.tasksList.splice(i, 1);
            }
        }*/
        this.storageService.deleteTask(task);
        this.$rootScope.$broadcast('TASK_DELETED', 0, 1, 2);

    }

    getTasksList() {
        return this.tasksList;
    }



    setFilteredTasks(tasks) {
        this.tasksList = tasks;
        this.$rootScope.$broadcast('TASK_FILTERED', 0, 1, 2);
    }
}
