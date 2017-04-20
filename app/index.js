'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiMask from 'angular-ui-mask';

import uiBootstrap from 'angular-ui-bootstrap';

import routeConfig from './common/config/routeConfig.js';
import taskService from './common/services/taskService.js';
import enterService from './common/services/enterService.js';
import userModule from './modules/user';
import enterModule from './modules/enter';
import homeModule from './modules/home';
import rootModule from './modules/app';

angular.module('app', [
    uiRouter,
    uiMask,
    uiBootstrap,
    rootModule.name,
    homeModule.name,
    userModule.name,
    enterModule.name,
])
    .config(routeConfig)
    .service('taskService', taskService)
    .service('enterService', enterService);



