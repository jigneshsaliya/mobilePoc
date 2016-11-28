

esWebApp.controller('LoginCtrl', ['$scope', '$state','dummyServices','ngTableParams',
	function ($scope,$state,dummyServices,ngTableParams) {
		$scope.userObj = {
			'userName':'',
			'password':''
		};

		$scope.response = '';

		$scope.doLogIn = function(userObj){
				console.log(userObj);
				dummyServices.validateUser().then(function success(response){
					console.log(response.data);
					$scope.response =  response.data;
				},function error(){

				});
		};
	}
]);
