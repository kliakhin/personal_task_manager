'use strict';

export default class HomeController {
    constructor($scope, $window, enterService) {
        'ngInject';
        this.$window = $window;
        this.userName = enterService.userName;

    }

    showPersonName(name) {
        console.log(this.$window.localStorage.getItem("users"));
    }

    clear() {
        this.$window.localStorage.removeItem("users");
    }
}