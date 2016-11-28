//defining module for the users.html page

var esWebApp = angular.module('ESWeb', ['ui.router','esWebConfig','ngTable'])
.run(['framework7',function(Framework7) {
  //window.application = new Framework7();
  window.application = Framework7.register({
    modalTitle: 'Framework7',
    material: true
  });
}])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state("page", {
        url: "/page",
        views : {
            MainView : {
                templateUrl : "partials/login.html",
                controller : "LoginCtrl"
            }
        }
    });
    //default view
    window.location.href="#/page"
    //$urlRouterProvider.otherwise("/dashboard");
});




esWebApp.run(['$rootScope', '$state', '$stateParams',

    function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
    }
]);
esWebApp.controller('root.controller', ['$rootScope','$state', 'framework7',function($rootScope, $state, Framework7) {
    //
    // $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    //
    // });
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      setTimeout(function() {
        Framework7.getInstance().initPage($('.pages'));
      });
    });
    // $rootScope.$on('$viewContentLoading', function(event, toState, toParams, fromState, fromParams) {
    //
    // });
    $rootScope.$on('$viewContentLoaded', function(event, toState, toParams, fromState, fromParams) {
      // event.preventDefault();
    });
  }]);
