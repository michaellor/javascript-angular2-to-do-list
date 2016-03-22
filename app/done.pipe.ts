import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({

})
export class DonePipe implements PipeTransform {
  transform(input: Task[], args){
    
  }
}
