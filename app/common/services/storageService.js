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
        this.tasks.push(task);
        this.sync();
    }

    getTasksList() {
        this.init();
        return this.tasks;
    }

    updateTask(task) {

    }

    deleteTask(task) {

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
}