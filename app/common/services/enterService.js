'use strict';

export default class EnterService {
    constructor(storageService, $state) {
        'ngInject';
        this.$state = $state;
        this.storageService = storageService;
        this.currentUser = storageService.getCurrentUser();
    }

    createNewUser(newUser) {
        if (!this.isUserExists(newUser)) {
            this.storageService.createUser(newUser);
        } else {
            console.log("Already Exists");
        }
    }

    login(checkUser) {
        var usersList = this.storageService.getUsersList();
        if (usersList != null) {
            var user = usersList.find(function (item) {
                if (item.email === checkUser.email && item.password === checkUser.password) {
                    return item;
                }
            });
            if (user != null) {
                this.currentUser = user;
                this.storageService.createCurrentUser(user);
            } else {
                console.log("User not found");
            }
        } else {
            console.log("User not found");
        }
    }

    logout() {
        this.storageService.deleteCurrentUser();
        this.currentUser = null;
        this.$state.go('app.home');
    }

    isLoggined() {
        return this.currentUser != null;
    }

    isUserExists(newUser) {
        var users = this.storageService.getUsersList();
        if (users == null) {
            return false;
        }
        var user = users.find(function (item) {
            if (item.email === newUser.email) {
                return item;
            }
        });
        return user != null;
    }

    getCurrentUser() {
        return this.currentUser;
    }
}