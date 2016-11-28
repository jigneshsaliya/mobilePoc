esWebApp.factory('dummyServices', dummyServices);
dummyServices.$inject = ['$rootScope', '$http','$q'];
function dummyServices($rootScope,$http,$q) {

    var alphabetJsonData = null;
    var dummyServiceFactory = {
      setalphabetJsonData : function(data){
        alphabetJsonData = data;
      },
      getalphabetJsonData : function(){
        return alphabetJsonData;
      }

    };

    var _fetchJson = function(){
        var deferred = $q.defer();
        $http.get('assets/kids/alphabet.json').success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            deferred.reject(err);
        });

        return deferred.promise;
    };

    var _validateUser = function(){
      var def = $q.defer();

      /*
      var req = {
        method: 'GET',
        url: "URL" + "/oauth/token",
        headers: {
          'Authorization': configurationsEnviromentData.esbAuthentication,
          service_version: configurations.global.serviceVersion
        },
        params: {
          client_id: configurationsEnviromentData.client_id,
          client_secret: configurationsEnviromentData.client_secret,
          grant_type: "password",
          brand: configurations.global.brand,
          username: username,
          password: password,
        }
      };
      */
      $http.get('https://jsonplaceholder.typicode.com/posts/1').then(function(data) {
        //console.log(data);
        def.resolve(data);
      }, function(data) {
        def.reject(data);
      });

      return def.promise;
    };

    dummyServiceFactory.fetchJson = _fetchJson;
    dummyServiceFactory.validateUser = _validateUser;
    return dummyServiceFactory;
}
