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
        this.groups = taskService.getGroupsList();
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
        if (filter.status != null && filter.status.length > 0) {
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
        if (filter.group != null && filter.group.length > 0) {
            var group = this.groups.find(function (item) {
                return item == filter.group;
            });
            filteredTasks = filteredTasks.filter(function (item) {
                return item.group == group;
            });
        }

        if (filter.priority != null && filter.priority.length > 0) {
            var priority = this.priorities.find(function (item) {
                return item == filter.priority;
            });
            filteredTasks = filteredTasks.filter(function (item) {
                return item.priority == priority;
            });
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