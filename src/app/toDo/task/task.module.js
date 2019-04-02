import angular from 'angular';
import taskComponent from './task.component';
import './task.css';

export default angular
	.module('taskModule', [])
	.component('taskComponent', taskComponent).name;
