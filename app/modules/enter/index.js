'use strict';

import angular from 'angular';
import routeConfig from './router.js';

let logginModule = angular.module('app.loggin', []);

logginModule.config(routeConfig);


export default logginModule;