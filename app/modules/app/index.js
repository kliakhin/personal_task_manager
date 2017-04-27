'use strict';

import angular from 'angular';
import routeConfig from './router.js';
import taskModalService from '../user/taskModalService.js';

let rootModule = angular.module('app.root', []);

rootModule
    .config(routeConfig)
    .service('taskModalService', taskModalService);


export default rootModule;