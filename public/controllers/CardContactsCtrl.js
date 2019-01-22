angular
	.module('addressBook')
	.controller('CardContactsCtrl', CardContactsController);

function CardContactsController() {
	var card = this;

	card.onInit = function onInit() {
		window.scroll(0, 0);
		if (!localStorage.contacts) {
			console.log('No contacts have added yet!');
			return false;
		}
		card.contacts = JSON.parse(localStorage.contacts);
		console.log(card.contacts);
		return true;
	};

	card.onInit();
}
