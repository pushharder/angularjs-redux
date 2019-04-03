export default class t {
	constructor($scope) {
        'ngInject';
        this.$scope = $scope;
    }
	$onInit() {
		this.text = this.task && this.task.text.toUpperCase();
	}
}




