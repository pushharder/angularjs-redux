import angular from 'angular';
import taskComponent from './task.component';

export default angular.module('taskModule', []).component('taskComponent', taskComponent).name;
