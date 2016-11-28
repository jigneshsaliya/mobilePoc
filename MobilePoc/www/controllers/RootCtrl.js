

esWebApp.controller('RootCtrl', ['$scope', '$state','dummyServices','ngTableParams',
	function ($scope,$state,dummyServices,ngTableParams) {
		var myApp = new Framework7();
		dummyServices.fetchJson().then(function (response) {
      dummyServices.setalphabetJsonData(response);
      //console.log(dummyServices.getalphabetJsonData());
		},
		function (err) {
		    console.log("error in fetching alphabets json");
		});
	}
]);
