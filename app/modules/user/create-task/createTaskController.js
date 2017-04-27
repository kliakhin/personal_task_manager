'use strict';

export default class CreateTaskController {
    constructor(taskService, enterService, $state, $scope) {
        'ngInject';
        this.taskService = taskService;
        this.enterService = enterService;
        this.$state = $state;
        this.task = {};
        this.popup = {
            opened: false
        };
        this.groups = taskService.getGroupsList();
        this.priorities = ["Low", "Middle", "High"]

        $scope.$on('GROUP_ADDED', (event)=> {
            this.groups = taskService.getGroupsList();
        });
    }


    createTask() {
        let task = this.task;
        this.taskService.createTask(task);
        this.task = {};
    }

    openPopup() {
        this.popup.opened = true;
    }
}