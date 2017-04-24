'use strict';

export default class EnterController {
    constructor(enterService, $state, $window) {
        'ngInject';

        this.$state = $state;
        this.$window = $window;
        this.enterService = enterService;
        this.user = {};
    }

    login() {
        let user = this.user;
        this.enterService.login(user);
        this.$state.go('app.home');
    }

    register() {
        let user = this.user;
        console.log("user from ctrl", user);
        this.enterService.createNewUser(user);
        this.$state.go('app.home');
    }

    logout() {
        this.enterService.logout();
        this.$state.go(this.$state.current, {}, {reload:true});
    }
}