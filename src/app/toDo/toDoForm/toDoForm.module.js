import angular from 'angular';
import toDoFormComponent from './toDoForm.component';

export default angular
	.module('toDoFormModule', [])
	.component('toDoFormComponent', toDoFormComponent).name;
