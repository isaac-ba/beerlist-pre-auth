app.controller('AuthCtrl', ['$scope','auth','$state', function($scope, auth,$state){
  auth.getCurrentUser().then(function (data) {
    $scope.currentUser = data.user;
}, function(error){
  console.log(error);
});

  $scope.register = function () {
    auth.register($scope.user).then(function(){
      $state.go('home');
    },
    function(error){
      console.log(error);
    });
  };

  $scope.logIn= function(){
    console.log('here');
    auth.logIn($scope.user).then(function(){
      $state.go('home');
    },
     function(error){
    $scope.error = error.data;
    });
  };

  $scope.$on('currentUserChange', function() {
    $scope.currentUser = auth.currentUser;
  });

}]);









