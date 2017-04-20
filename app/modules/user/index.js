'use strict';

import angular from 'angular';
import routeConfig from './router.js';

let userModule = angular.module('app.user', []);

userModule.config(routeConfig);


export default userModule;