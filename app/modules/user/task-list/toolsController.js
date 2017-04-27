/**
 * Created by Yevgen.Kliakhin on 4/26/2017.
 */
'use strict';

export default class ToolsController {
    constructor(taskService) {
        'ngInject';
        this.taskService = taskService;
        this.filter = {};
        this.tasksList = taskService.getTasksList();
        this.statuses = ["All", "Done", "To do"];
        this.groups = ["", "Work", "Home", "Other"];
        this.priorities = ["", "Low", "Middle", "High"];
        this.popupStart = {
            opened: false
        };
        this.popupEnd = {
            opened: false
        };
    }


    apply() {
        var filteredTasks = this.tasksList;
        var filter = this.filter;
        if (filter.status != null) {
            if (filter.status == "Done") {
                filteredTasks = filteredTasks.filter(function (item) {
                    return item.done == true;
                })
            } else if (filter.status == "To do") {
                filteredTasks = filteredTasks.filter(function (item) {
                    return item.done == false;
                })
            }
        }
        if (filter.group != null) {
            if (filter.group == "Work") {
                filteredTasks = filteredTasks.filter(function (item) {
                    return item.group == "Work";
                })
            } else if (filter.group == "Home") {
                filteredTasks = filteredTasks.filter(function (item) {
                    return item.group == "Home";
                })
            } else if (filter.group == "Other") {
                filteredTasks = filteredTasks.filter(function (item) {
                    return item.group == "Other";
                })
            }
        }
        if (filter.priority != null) {
            if (filter.priority == "Low") {
                filteredTasks = filteredTasks.filter(function (item) {
                    return item.priority == "Low";
                })
            } else if (filter.priority == "Middle") {
                filteredTasks = filteredTasks.filter(function (item) {
                    return item.priority == "Middle";
                })
            } else if (filter.priority == "High") {
                filteredTasks = filteredTasks.filter(function (item) {
                    return item.priority == "High";
                })
            }
        }
        if (filter.start != null) {
            filteredTasks = filteredTasks.filter(function (item) {
                var d1 = new Date(item.deadline);
                var d2 = new Date(filter.start);
                return d1.getTime() >= d2.getTime();
            })
        }
        if (filter.end != null) {
            filteredTasks = filteredTasks.filter(function (item) {
                var d1 = new Date(item.deadline);
                var d2 = new Date(filter.end);
                return d1.getTime() <= d2.getTime();
            })
        }
        this.taskService.setFilteredTasks(filteredTasks);
    }

    clear() {
        this.filter = {};
        this.taskService.setFilteredTasks(this.tasksList);

    }

    openPopupStart() {
        this.popupStart.opened = true;
    }

    openPopupEnd() {
        this.popupEnd.opened = true;
    }

}