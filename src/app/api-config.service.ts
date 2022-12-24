import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import TaskListModel from './models/taskListModel';
import TaskModel from './models/taskModel';

@Injectable({
  providedIn: 'root',
})
export class ApiConfigService {
  HTTP_BASE_URL = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  // get API call
  getTaskLists(url: string) {
    return this.httpClient.get<TaskListModel[]>(`${this.HTTP_BASE_URL}/${url}`);
  }

  getTasks(url: string) {
    return this.httpClient.get<TaskModel[]>(`${this.HTTP_BASE_URL}/${url}`);
  }

  post(url: string, data: Object) {
    return this.httpClient.post<TaskListModel>(
      `${this.HTTP_BASE_URL}/${url}`,
      data
    );
  }

  put(url: string, data: Object) {
    return this.httpClient.put(`${this.HTTP_BASE_URL}/${url}`, data);
  }

  patch(url: string, data: Object) {
    return this.httpClient.patch(`${this.HTTP_BASE_URL}/${url}`, data);
  }

  deleteTask(url: string) {
    return this.httpClient.delete<TaskModel>(`${this.HTTP_BASE_URL}/${url}`);
  }

  deleteTaskList(url: string) {
    return this.httpClient.delete<TaskListModel>(
      `${this.HTTP_BASE_URL}/${url}`
    );
  }
}
