angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {

  $http.get("http://192.168.43.58/blinkrr/products/lists").success(function(data){
    
    console.log(data);
  });
      // $http({aasdfa
      //   url: "http://192.168.43.58/blinkrr/products/lists",
      //   method: "POST",
      //   headers: {'Content-Type':'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*'}
      // }).success(function(data){
      //   console.log(data);
      // });
// Access-Control-Allow-Origin: *
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats,$http) {
  $scope.chat = Chats.get($stateParams.chatId);


})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
