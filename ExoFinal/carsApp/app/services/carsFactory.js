angular.module("carsApp")
    .factory("carsFactory", function($http) {
        var factory = {};
        var cars = null;

        factory.isDataloaded = function() {
            return (cars === null) ? false : true;
        };

        factory.setCars = function(data) {
            cars = data;
        }

        factory.getAllCars = function() {
            return $http.get("http://localhost:4000/cars");
        }

        factory.getCars = function() {
            return cars;
        }

        factory.getCarById = function(id){
          for (var i = 0; i < cars.length; i++) {
              if (cars[i].id === id.name) {
                  return cars[i];
              }
          }
          return null;
        }

        return factory;
    });
