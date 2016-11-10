angular.module("carsApp", ["ngRoute"]);

angular.module("carsApp").config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "app/views/accueil.html",
        controller: "listCarsController"
    }).when('/cars/:name', {
        templateUrl: "app/views/cars.html",
        controller: "carsController"
    });
});

angular.module("carsApp")
    .controller("listCarsController", function($scope, $http, carsFactory) {
        if (!carsFactory.isDataloaded()) {
            carsFactory.getAllCars().then(function(cars) {
                carsFactory.setCars(cars.data);
                displayCars();
            })
        }else{
          displayCars();
        }

        function displayCars(){
          $scope.titre = "Liste des voitures";
          $scope.cars = carsFactory.getCars();
        }
    }).controller("carsController", function($scope, $routeParams, $http, carsFactory){
      if (!carsFactory.isDataloaded()) {
          carsFactory.getAllCars().then(function(cars) {
              carsFactory.setCars(cars.data);
              displayCars();
          })
      }else{
        displayCars();
      }
      function displayCars(){
        $scope.cars = carsFactory.getCarById($routeParams);
      }
    });
