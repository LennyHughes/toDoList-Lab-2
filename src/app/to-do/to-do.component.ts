import { Component, OnInit } from '@angular/core';

interface Todo {
  task : string;
  completed : boolean;
}

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  taskObject : Todo [] = [
    {
      task: "Wash clothes",
      completed: false
    },
    {
      task: "Cook meals",
      completed: true
    },
    {
      task: "Pay bills",
      completed: true
    }
  ]
 

  constructor() {
  }

  ngOnInit() {
  }

  

  getListClass(index :number){
    if(this.taskObject[index].completed){
      return "completed-li";
    }
    else {
       return "not-completed-li";
    }  
  
  }

  addTask( taskInput : string){
    let newTaskObj = {
        task : taskInput,
        completed : false
    }
    this.taskObject.push(newTaskObj);
   
  }

  removeTask(index : number){
    this.taskObject.splice(index,1);
  }

  completeTask(index : number){
    this.taskObject[index].completed = true;
  }

  test(keyword : string){
    alert(keyword);
  }

}
