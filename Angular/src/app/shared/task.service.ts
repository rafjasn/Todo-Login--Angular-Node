import { Task } from './task.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  selectedTask: Task|{}={};
  tasks: Task[];

  readonly baseURL = 'http://localhost:3000/api/task'



  constructor(private http: HttpClient) { }

postTask(task : Task){
return this.http.post(this.baseURL, task);
}
getAllTasks(){
  return this.http.get(this.baseURL);
}
putTask(task : Task){
  return this.http.put(this.baseURL + `/${task.id}`, task);
}
deleteTask(id: string){
  return this.http.delete(this.baseURL + `/${id}`);
}


}
