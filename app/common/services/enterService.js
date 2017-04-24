'use strict';

export default class EnterService {
    constructor(storageService, $state) {
        'ngInject';
        this.$state = $state;
        this.storageService = storageService;
        this.loggined = false;
        this.userName = "";
        this.users = storageService.getUsersFromDB();
    }

    createNewUser(user) {
        if (this.storageService.getUserByEmail(user.email) == null) {
            this.storageService.addUser(user);
        } else {
            console.log("Already exists");
        }
    }

    login(user) {
        var userFromDB = this.storageService.getUserByEmail(user.email);
        if (userFromDB != null && userFromDB.password === user.password) {
            this.loggined = true;
            this.userName = userFromDB.firstName;
        } else {
            console.log("Not found");
        }
    }

    logout() {
        this.loggined = false;
        this.$state.go('app.home');
    }

    isLoggined() {
        return this.loggined;
    }
}