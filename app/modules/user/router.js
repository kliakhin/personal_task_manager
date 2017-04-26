'use strict';

import CreateTaskCtrl from './create-task/createTaskController.js';
import TaskListCtrl from './task-list/taskListController.js';
import TaskCtrl from './task-view/taskController.js';

import CreateTaskListCtrl from './create-task/createTaskListController.js';

import userTemplate from './user.html';
import createTaskTemplate from './create-task/create-task.html';
import createTaskFormTemplate from './create-task/task-form.html';
import taskListTemplate from './task-list/tasks.html';
import taskTemplate from './task-view/task.html';
import createTaskListTemplate from './create-task/task-list.html';

export default ($stateProvider)=> {
    'ngInject';

    $stateProvider
        .state('app.user', {
            abstract: true,
            url: '/user',
            template: userTemplate,
            resolve: {
                isLoggined: (enterService, $state, $q, $timeout) => {
                    console.log("gds;gsd");
                    let deffered = $q.defer();
                    if (enterService.isLoggined()) {
                        deffered.resolve(true);
                    } else {
                        $timeout(()=> {
                            $state.go("app.enter.in");
                        });
                        deffered.resolve(false);
                    }
                    return deffered.promise;
                }
            }
        })
        .state('app.user.tasks', {
            url: '/task-list',
            title: 'Tasks list',
            template: taskListTemplate,
            controller: TaskListCtrl,
            controllerAs: 'ctrl'
        })
        .state('app.user.createTask', {
            url: '/task-create',
            abstract: true,
            template: createTaskTemplate
        })
        .state('app.user.createTask.index', {
            url: '',
            title: 'Create New Task',
            views: {
                'form': {
                    controller: CreateTaskCtrl,
                    controllerAs: 'ctrl',
                    template: createTaskFormTemplate
                },
                'list': {
                    controller: CreateTaskListCtrl,
                    controllerAs: 'ctrl',
                    template: createTaskListTemplate
                }
            }
        })
        .state('app.user.viewTask', {
            url: '/task-list/:taskId',
            template: taskTemplate,
            controller: TaskCtrl,
            controllerAs: 'ctrl',
            resolve: {
                task: ($stateParams, tasks, taskService, $state) => {
                    'ngInject';

                    let id = $stateParams.taskId;
                    let task = taskService.getTask(id, tasks);

                    if (!task) {
                        return $state.go('app.home');
                    }

                    return task;
                }
            }
        });
}