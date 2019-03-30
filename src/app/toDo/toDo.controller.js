export default class {
	constructor() {}
	$onInit() {
		this.tasks = initialList;
	}
}

const initialList = [
	{ text: 'toDo1', isDone: true },
	{ text: 'toDo2', isDone: false }
];
