app.factory('auth', ['$http','$rootScope','$q', function($http,$rootScope,$q){
  var auth = {};

  auth.register = function(user){
    return $http.post('/register', user);
  };

  auth.logIn = function(user){
    console.log('auth.js');
    return $http.post('/login', user).then(function (response) {
      auth.setCurrentUser(response.data.username);
  }, function (error) {
    return $q.reject(error)
  });
};

  auth.currentUser = null;

  auth.setCurrentUser = function (user) {
    auth.currentUser = user;
    $rootScope.$broadcast("currentUserChange", user);
    console.log(auth.currentUser);
  };

  auth.getCurrentUser = function() {
    return $http.get('/currentUser').then(function (response) {
      auth.setCurrentUser(response.data.username);
    },
      function(error){
        console.log(error);
      });
  };

  

  return auth;
}]);