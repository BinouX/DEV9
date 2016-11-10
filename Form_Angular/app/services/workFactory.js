angular.module("testApp")
    .factory("workFactory", function($http) {
        var workFacto = {};
        var works = null;

        workFacto.isDataLoadedWorks = function() {
            return (works === null) ? false : true;
        };

        workFacto.setWorks = function(data) {
            works = data;
        };

        workFacto.getWorksAll = function() {
            return $http.get("http://localhost:4000/work");
        }

        workFacto.Works = function() {
            return works;
        };

        workFacto.addWork = function(work){
          return $http.post("http://localhost:4000/work", work);
        };

        return workFacto;
    });
