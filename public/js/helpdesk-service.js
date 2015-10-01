(function(){

	// Service
	angular.module('HelpDesk')
		.service('HelpdeskService', ['$http', function($http){

		return{
			getTickets: getTickets,
			getTicket: getTicket,
			updateTicket: updateTicket,
			addTicket : addTicket,
			getProfiles: getProfiles,
			getDepartments: getDepartments,
		};

		function getTickets(sortKey){
			console.log('/api/tickets/' + sortKey);
			return $http.get('/api/tickets/' + sortKey);
		}

		function getTicket(id){
			return $http.get('/api/ticket/' + id);
		}
/*
		function deleteContact(id){
			return $http.delete('/api/contacts/' + id);
		}
*/
		function addTicket(ticket){
			return $http.post('/api/ticket', ticket);
		}

		function getProfiles(){
			return $http.get('/api/profiles');
		}

		function getDepartments(){
			return $http.get('/api/departments');
		}


		function updateTicket(ticket, id){
			console.log('updateTicket');
			return $http.put('/api/tickets/' + id, ticket);
		}

	}]); // End of service


}()); // end of outer

	
