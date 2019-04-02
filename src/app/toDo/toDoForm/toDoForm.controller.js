export default class {
	constructor() {}

	$onInit() {
        this.isChecked = this.isAllDone;
    }
    $onChanges(a) {
        this.isChecked = this.isAllDone;
    }

	handleSubmit() {
		this.submit({ text: this.text });
		this.text = '';
    }
    handleCheckboxToggle() {
        this.onCheckboxToggle({isChecked: this.isChecked})
    }
}
