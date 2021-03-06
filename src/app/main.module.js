import angular from 'angular';
import ngRedux from 'ng-redux';
import mainComponent from './main.component';
import toDoModule from './toDo/toDo.module';
import './main.css';

export default angular
	.module('myAppModule', [ngRedux, toDoModule])
    .component('mainComponent', mainComponent)
    .name;
