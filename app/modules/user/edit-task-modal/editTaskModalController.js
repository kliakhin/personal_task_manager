'use strict';

export default class EditTaskModalController {
    constructor($uibModalInstance, taskService, task) {
        'ngInject';
        this.$uibModalInstance = $uibModalInstance;
        this.taskService = taskService;
        this.task = task;
        this.popup = {
            opened: false
        };
        this.groups = taskService.getGroupsList();
        this.priorities = ["Low", "Middle", "High"]
    }

    close() {
        this.$uibModalInstance.close('closed');
    }

    editTask() {
        console.log(this.task.deadline);
        this.taskService.updateTask(this.task);
        this.task = {};
        this.close();
    }

    openPopup() {
        this.popup.opened = true;
    }

}