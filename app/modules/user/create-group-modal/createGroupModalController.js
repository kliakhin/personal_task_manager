'use strict';

export default class CreateGroupModalController {
    constructor($uibModalInstance, taskService) {
        'ngInject';
        this.$uibModalInstance = $uibModalInstance;
        this.taskService = taskService;
        this.group = "";
    }

    close() {
        this.$uibModalInstance.close('closed');
    }

    createGroup() {
        let group = this.group;
        this.taskService.createGroup(group);
        this.group = "";
        this.close();
    }

    openPopup() {
        this.popup.opened = true;
    }

}