import angular from 'angular';
import toDoListComponent from './toDoList.component';

export default angular
	.module('toDoListModule', [])
	.component('toDoListComponent', toDoListComponent).name;
