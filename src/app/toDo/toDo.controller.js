export default class {
	constructor() {}

	$onInit() {
		this.tasks = initialList;
		this.isAllDone = this.isAllTasksDone();
	}

	addTask(text) {
		initialList.push({
			text,
			isDone: false,
			id: Math.random() * 99 + 1
		});
		this.isAllDone = this.isAllTasksDone();
	}

	toggleAll(isChecked) {
		initialList.forEach(task => {
			task.isDone = isChecked;
		});
		this.isAllDone = this.isAllTasksDone();
	}
	toggleTask(id, isDone) {
		initialList.forEach(task => {
			if (task.id === id) task.isDone = isDone;
        });
        this.isAllDone = this.isAllTasksDone();
	}

	isAllTasksDone() {
		for (let i = 0; i < initialList.length; i++) {
			if (!initialList[i].isDone) {
				return false;
			}
		}
		return true;
	}
}

const initialList = [
	{ text: 'toDo1', isDone: false, id: 1 },
	{ text: 'toDo2', isDone: true, id: 2 }
];
