angular.module('addressBook').controller('AddContactsCtrl', [
	'$rootScope',
	function($rootScope) {
		var vm = this;
		vm.allContacts = [];
		vm.contactInfo = {
			name: '',
			street: '',
			state: '',
			city: '',
			zip: '',
			phone: ''
		};

		vm.addNewContact = function() {
			vm.allContacts.push(vm.contactInfo);
			localStorage.setItem('contacts', JSON.stringify(vm.allContacts));
			vm.contactInfo = {};
			console.log('All Contacts', vm.allContacts);
		};
	}
]);
