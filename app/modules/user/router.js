'use strict';

import CreateTaskCtrl from './create-task/createTaskController.js';
import TaskListCtrl from './task-list/taskListController.js';
import ToolsCtrl from './task-list/toolsController.js';
import SettingsCtrl from './task-list/settingsController.js';

import CreateTaskListCtrl from './create-task/createTaskListController.js';

import userTemplate from './user.html';
import createTaskTemplate from './create-task/create-task.html';
import createTaskFormTemplate from './create-task/task-form.html';
import taskListTemplate from './task-list/tasks.html';
import createTaskListTemplate from './create-task/task-list.html';

import tasksMainPageTemplate from './task-list/tasksMainPage.html';
import toolsTemplate from './task-list/tools.html';
import settingsTemplate from './task-list/settings.html';


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
            abstract: true,
            template: tasksMainPageTemplate
        })
        .state('app.user.tasks.index', {
            url: '',
            title: 'Tasks list',
            views: {
                'tools': {
                    template: toolsTemplate,
                    controller: ToolsCtrl,
                    controllerAs: 'ctrl'
                },
                'list': {
                    template: taskListTemplate,
                    controller: TaskListCtrl,
                    controllerAs: 'ctrl'
                },
                'settings': {
                    template: settingsTemplate,
                    controller: SettingsCtrl,
                    controllerAs: 'ctrl'
                }
            },
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
        });
}