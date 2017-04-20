'use strict';

export default class EnterController {
    constructor(enterService, $state) {
        'ngInject';
        //console.log("loggin");
        this.$state = $state;
        this.enterService = enterService;
    }

    login() {
        this.enterService.login();
        this.$state.go('app.home');
    }

    register() {
        this.enterService.login();
        this.$state.go('app.home');
    }

    logout() {
        this.enterService.logout();
        this.$state.go('app.home');
    }
}