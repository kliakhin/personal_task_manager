'use strict';

export default class TaskService {
    constructor($rootScope) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.tasks = [{
            title: 'Write the project',
            body: 'Write the project for BU',
            deadline: 'yesterday'
        }];
    }

    addTask(task) {
        this.tasks.push(task);
        this.$rootScope.$broadcast('TASK_ADDED', 0, 1, 2);
    }

    getTasksList() {
        return angular.copy(this.tasks);
    }

    loadTasksList() {
        return this.tasks;
    }
}