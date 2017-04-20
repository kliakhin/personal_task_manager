'use strict';

import angular from 'angular';
import routeConfig from './router.js';

let homeModule = angular.module('app.home', []);

homeModule.config(routeConfig);


export default homeModule;