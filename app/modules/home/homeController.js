'use strict';

export default class HomeController {
    constructor(enterService, localStorageService) {
        'ngInject';
        this.currentUser = enterService.getCurrentUser();
        this.localStorageService = localStorageService;

    }

    showUsers() {
        console.log("Users", this.localStorageService.get("users"))
    }

    showTasks() {
        if (this.currentUser != null) {
            console.log("Tasks", this.localStorageService.get(this.currentUser.email))
        } else {
            console.log("Log in");
        }
    }

    clear() {
        this.localStorageService.clearAll();
    }
}