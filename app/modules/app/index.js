'use strict';

import angular from 'angular';
import routeConfig from './router.js';

let rootModule = angular.module('app.root', []);

rootModule.config(routeConfig);


export default rootModule;