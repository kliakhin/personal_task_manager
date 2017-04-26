'use strict';

export default class CreateTaskController {
    constructor(taskService, enterService, $state) {
        'ngInject';
        this.taskService = taskService;
        this.enterService = enterService;
        this.$state = $state;
        this.task = {};
        this.popup = {
            opened: false
        };
        this.groups = ["Work", "Home", "Other"];
        this.priorities = ["Low", "Middle", "High"]
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