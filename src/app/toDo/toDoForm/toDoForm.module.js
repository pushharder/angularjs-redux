import angular from 'angular';
import toDoFormComponent from './toDoForm.component';
import './toDoForm.css';

export default angular
	.module('toDoFormModule', [])
	.component('toDoFormComponent', toDoFormComponent).name;
