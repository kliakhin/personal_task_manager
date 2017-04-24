'use strict';

export default class StorageService {
    constructor($window) {
        this.$window = $window;
        this.usersDB = [];
    }

    addUser(user) {
        this.usersDB.push(user);
        this.$window.localStorage.setItem("users", JSON.stringify(this.usersDB));
    }

    getUserByEmail(email) {
        return this.usersDB.find(function (item) {
            if (item.email === email) {
                return item;
            }
        });
    }

    getUsersFromDB() {
        if (this.$window.localStorage.getItem("users") == null) {
            let user = {
                email: "test@test.com",
                password: "123456",
                firstName: "Test Name",
                lastName: "Test LastName"
            };
            this.usersDB.push(user);
        } else {
            this.usersDB = JSON.parse(this.$window.localStorage.getItem("users"));
        }
        return this.usersDB;
    }


}