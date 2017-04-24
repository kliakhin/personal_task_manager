'use strict';

export default class EnterService {
    constructor(storageService, $state) {
        'ngInject';
        this.$state = $state;
        this.storageService = storageService;
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
            this.storageService.saveCurrentUser(userFromDB);
        } else {
            console.log("Not found");
        }
    }

    logout() {
        this.storageService.deleteCurrentUser();
        this.$state.go('app.home');
    }

    isLoggined() {
        let user = this.storageService.getCurrentUser();
        return user != null;
    }
}