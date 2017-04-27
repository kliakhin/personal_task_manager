'use strict';
export default class StorageService {

    constructor(localStorageService) {
        'ngInject';
        this.localStorageService = localStorageService;
        this.users = [];
        this.user = {};
        this.tasks = [];
        this.groups = ["", "Work", "Home", "Other"];
    }

    init() {
        this.users = this.localStorageService.get("users");
        if (this.getCurrentUser() != null) {
            this.user = this.localStorageService.get(this.getCurrentUser().email);
            if (this.user != null) {
                this.tasks = this.user.tasks;
                this.groups = this.user.groups;
            } else {
                this.user = {
                    tasks: [],
                    groups: ["", "Work", "Home", "Other"]
                };
            }
        }
        if (this.users == null) {
            this.users = [];
        }
        if (this.user != null) {
            if (this.user.tasks == null) {
                this.tasks = [];
            }
        }
    }

    sync() {
        this.localStorageService.set("users", this.users);
        if (this.getCurrentUser() != null) {
            this.user.tasks = this.tasks;
            this.user.groups = this.groups;
            this.localStorageService.set(this.getCurrentUser().email, this.user);
        }
    }


    createTask(tasks) {
        this.tasks = tasks;
        this.sync();
    }


    createGroup(group) {
        this.groups.push(group);
        this.sync();
    }

    getTasksList() {
        this.init();
        return this.tasks;
    }

    getGroupsList() {
        this.init();
        return this.groups;
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

    deleteTask(tasks) {
        this.tasks = tasks;
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

    setFilteredTasks(tasks) {
        this.tasks = tasks;
    }
}
