'use strict';

export default class CreateTaskModalController {
    constructor($uibModalInstance, taskService) {
        'ngInject';
        this.$uibModalInstance = $uibModalInstance;
        this.taskService = taskService;
        this.task = {};
        this.popup = {
            opened: false
        };
        this.groups = ["Work", "Home", "Other"];
        this.priorities = ["Low", "Middle", "High"]
    }

    close() {
        this.$uibModalInstance.close('closed');
    }

    createTask() {
        let task = this.task;
        this.taskService.createTask(task);
        this.task = {};
        this.close();
    }

    openPopup() {
        this.popup.opened = true;
    }

}