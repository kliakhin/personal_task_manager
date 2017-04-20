'use strict';

export default class EnterService {
    constructor() {
        this.loggined = false;
        this.usersDB = [
            {
                login: "user",
                password: "123"
            }
        ];
    }

    login(user) {
        /*var isUserExist = this.usersDB.find(function (item) {
            return (item.login === user.login) && (item.password === user.password);
        });
        if (isUserExist) {
            this.loggined = true;
        }*/
        this.loggined = true;
    }

    logout() {
        this.loggined = false;
    }

    isLoggined() {
        return this.loggined;
    }
}