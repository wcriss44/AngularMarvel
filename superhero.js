
  //main app for page
  var app = angular.module('superDuperHeroApp', []);


  //Single controller
  app.controller("hero", ['$scope',  '$http', function($scope, $http) {

    //define initial empty search
   $scope.search="";
   //this function is called in the HTML as well as once below. It contains the HTTP request
   $scope.searchResult = function(){
    var url;
    //URL is dependent on search having characters or not
    if($scope.search == ""){
      url="https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=44&apikey=45ced310692d43a67c8e19f517a3f525&hash=f25e0c4e1d1707c44af9905ef2cb79d4"
    }else{
      url="https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" + $scope.search + "&limit=100&ts=44&apikey=45ced310692d43a67c8e19f517a3f525&hash=f25e0c4e1d1707c44af9905ef2cb79d4"
    }
  $http({
  method: 'GET',
  url: url
}).then(function successCallback(response) {
  //this actually populates the characters
    $scope.characters = response.data.data.results
  }, function errorCallback(response) {
  });
}
// This gets called once to populate on initial load
$scope.searchResult()

  }]);