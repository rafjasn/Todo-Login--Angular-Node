import { TaskService } from './../shared/task.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../shared/task.model';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.refreshList();
    this.reset();
  }

reset(form?: NgForm){
  if(form)
  form.reset();
  this.taskService.selectedTask = {
    id: "0",
    task: ""
  }

}



  onSubmit(form: NgForm) {
    if(form.value.id == "0" || form.value.id == null){
    this.taskService.postTask(form.value).subscribe((res)=> {
      this.refreshList();
      this.reset(form);

    });
  }
  else {
        this.taskService.putTask(form.value).subscribe((res)=> {
      this.refreshList();
      this.reset(form);

  

    });
  }
  }

  
refreshList(){
  this.taskService.getAllTasks().subscribe((res)=> {
    this.taskService.tasks = res as Task[];
  });
}

onEdit(task: Task){
  this.taskService.selectedTask = task;
}

onDelete(id: string){
  console.log(id);
  this.taskService.deleteTask(id).subscribe((res) =>{
    this.refreshList();
  })
}


}
