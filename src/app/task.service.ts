import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';
import TaskListModel from './models/taskListModel';
import TaskModel from './models/taskModel';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private apiConfigService: ApiConfigService) {}

  // to fetch all task lists
  getAllTaskLists(): Observable<TaskListModel[]> {
    return this.apiConfigService.getTaskLists('taskLists');
  }

  getAllTasks(taskListId: string): Observable<TaskModel[]> {
    return this.apiConfigService.getTasks(`taskLists/${taskListId}`);
  }

  // create a task list bucket
  createTaskList(title: string): Observable<TaskListModel> {
    let data = { title: title };
    return this.apiConfigService.post('tasklists', data);
  }

  // to fetch all tasks inside a task list obj
  getAllTasksForATaskList(taskListId: string): Observable<TaskModel[]> {
    return this.apiConfigService.getTasks(`tasklists/${taskListId}/tasks`);
  }

  // create a task inside a particular task list obj
  createTaskInsideAtaskList(taskListId: string, title: string) {
    return this.apiConfigService.post(`tasklists/${taskListId}/tasks`, {
      title,
    });
  }

  // delete a task list
  deleteTaskList(taskListId: string): Observable<TaskListModel> {
    return this.apiConfigService.deleteTaskList(`tasklists/${taskListId}`);
  }

  // delete a task inside a task list
  deleteATaskInsideATaskList(taskListId: string, taskId: string) {
    return this.apiConfigService.deleteTask(
      `tasklists/${taskListId}/tasks/${taskId}`
    );
  }

  updateTaskStatus(taskListId: string, taskObj: TaskModel) {
    let updateData = { completed: taskObj.completed };
    return this.apiConfigService.patch(
      `tasklists/${taskListId}/tasks/${taskObj._id}`,
      updateData
    );
  }
}
