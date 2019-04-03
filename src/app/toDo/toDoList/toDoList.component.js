import template from './toDoList.component.html';
import controller from './toDoList.controller';

export default {
	template,
    controller,
    bindings: {
        taskList: '<',
        toggleTask: '&'
    }
};
