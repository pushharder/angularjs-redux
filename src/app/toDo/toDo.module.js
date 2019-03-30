import angular from 'angular';
import toDoComponent from './toDo.component';
import toDoFormModule from './toDoForm/toDoForm.module';
import toDoListModule from './toDoList/toDoList.module';
import taskModule from './task/task.module';

export default angular
	.module('toDoModule', [toDoFormModule, toDoListModule, taskModule])
    .component('toDoComponent', toDoComponent)
    .name;
