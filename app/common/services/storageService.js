'use strict';
export default class StorageService {

    constructor(localStorageService) {
        'ngInject';
        this.localStorageService = localStorageService;
        this.users = [];
        this.tasks = [];
    }

    init() {
        this.users = this.localStorageService.get("users");
        if (this.getCurrentUser() != null) {
            this.tasks = this.localStorageService.get(this.getCurrentUser().email);
        }
        if (this.users == null) {
            this.users = [];
        }
        if (this.tasks == null) {
            this.tasks = [];
        }

    }

    sync() {
        this.localStorageService.set("users", this.users);
        if (this.getCurrentUser() != null) {
            this.localStorageService.set(this.getCurrentUser().email, this.tasks);
        }
    }

    createTask(task) {
        task.id = this.generateUUID();
        this.tasks.push(task);
        this.sync();
    }

    getTasksList() {
        this.init();
        return this.tasks;
    }

    updateTask(editedTask) {
        this.init();
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id == editedTask.id) {
                this.tasks[i] = editedTask;
            }
        }
        this.sync();
    }

    deleteTask(task) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id == task.id) {
                this.tasks.splice(i, 1);
            }
        }
        this.sync();
    }

    createUser(user) {
        this.init();
        this.users.push(user);
        this.sync();
    }

    getUsersList() {
        this.init();
        return this.users;
    }

    updateUser() {

    }

    deleteUser(user) {

    }

    createCurrentUser(user) {
        this.localStorageService.set("currentUser", user);
    }

    deleteCurrentUser() {
        this.localStorageService.remove("currentUser");
    }

    getCurrentUser() {
        return this.localStorageService.get("currentUser");
    }

    generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}