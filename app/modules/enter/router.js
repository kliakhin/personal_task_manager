'use strict';

import EnterController from './enterController';
import logginTemplate from './loggin.html'
import loggoutTemplate from './loggout.html'
import enterTemplate from './enter.html';
import registerTemplate from './register.html';

export default ($stateProvider)=> {
    'ngInject';

    $stateProvider
        .state('app.enter', {
            url: '/enter',
            abstract: true,
            template: enterTemplate
        })
        .state('app.enter.register', {
                url: '/register',
                template: registerTemplate,
                controller: EnterController,
                controllerAs: 'ctrl',
                resolve: {
                    isLoggined: (enterService) => {
                        if (enterService.isLoggined()) {
                            return this.$state.go('app.home');
                        }
                    }
                }
            }
        )
        .state('app.enter.in', {
                url: '/login',
                template: logginTemplate,
                controller: EnterController,
                controllerAs: 'ctrl',
                resolve: {
                    isLoggined: (enterService) => {
                        if (enterService.isLoggined()) {
                            return this.$state.go('app.home');
                        }
                    }
                }
            }
        )
        .state('app.enter.out', {
                url: '/logout',
                template: loggoutTemplate,
                controller: EnterController,
                controllerAs: 'ctrl',
                resolve: {
                    isLoggined: (enterService) => {
                        if (!enterService.isLoggined()) {
                            return this.$state.go('app.home');
                        }
                    }
                }
            }
        );
}