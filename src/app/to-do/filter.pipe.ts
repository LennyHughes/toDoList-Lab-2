import { Pipe, PipeTransform } from '@angular/core';

interface Todo {
    task : string;
    completed : boolean;
  }

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(tasks: Todo[], filterText: string) {
        if(!tasks) return [];
        if(!filterText) return tasks;
      
        return tasks.filter(tasks => tasks.task.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
     
       
}
   
}