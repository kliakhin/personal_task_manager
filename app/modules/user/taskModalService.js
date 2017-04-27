/**
 * Created by Yevgen.Kliakhin on 4/26/2017.
 */
'use strict';

import createTaskModalTemplate from './create-task-modal/create-task-modal.html';
import createTaskModalController from './create-task-modal/createTaskModalController.js';
import editTaskModalTemplate from './edit-task-modal/edit-task-modal.html';
import editTaskModalController from './edit-task-modal/editTaskModalController.js';

export default class TaskModalService {
    constructor($uibModal) {
        'ngInject';
        this.$uibModal = $uibModal;
    }

    createTaskModal() {
        let modalInstance = this.$uibModal.open({
            template: createTaskModalTemplate,
            controller: createTaskModalController,
            controllerAs: 'ctrl',
        });

        return modalInstance.result;
    }

    editTaskModal(task) {
        let modalInstance = this.$uibModal.open({
            template: editTaskModalTemplate,
            controller: editTaskModalController,
            controllerAs: 'ctrl',
            resolve: {
                task: task
            }
        });
        return modalInstance.result;
    }
}




