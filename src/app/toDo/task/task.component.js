import template from './task.component.html';
import controller from './task.controller';

export default {
	template,
    controller,
    bindings: {
        task: '<',
        isDone: '<',
        changeStatus: '&'
    }
};
