'use strict';

import angular from 'angular';
import routeConfig from './router.js';
import taskModalService from './taskModalService';

let userModule = angular.module('app.user', []);

userModule
    .config(routeConfig)
    .service('taskModalService', taskModalService);

export default userModule;