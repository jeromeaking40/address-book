angular.module('addressBook').controller('HomeCtrl', HomeController);

function HomeController() {
	var home = this;
	home.onInit = onInit;

	function onInit() {
		console.log('Home Controller is loaded');
		if (!localStorage.contacts) {
			console.log('No contacts have added yet!');
			return false;
		}
		home.contacts = JSON.parse(localStorage.contacts);
		console.log(home.contacts);

		return true;
	}

	home.onInit();
}
