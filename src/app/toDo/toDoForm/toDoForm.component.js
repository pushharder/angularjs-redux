import template from './toDoForm.component.html';
import controller from './toDoForm.controller';

export default {
	template,
    controller,
    bindings: {
        submit: '&',
        onCheckboxToggle: '&',
        isAllDone: '<'
    }
};
