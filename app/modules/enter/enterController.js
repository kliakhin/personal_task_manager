'use strict';

export default class EnterController {
    constructor(enterService, $state) {
        'ngInject';

        this.$state = $state;
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
        this.enterService.createNewUser(user);
        this.$state.go('app.enter.in');
    }

    logout() {
        this.enterService.logout();
        this.$state.go(this.$state.current, {}, {reload: true});
    }
}