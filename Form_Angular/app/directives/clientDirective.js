angular.module("testApp")
    .directive("client", function() {
        return {
            restrict: "E",
            templateUrl: "./app/directives/templates/clientTemplate.html",
            scope: {
                message: "@",
                data: '='
            },
            link: function(scope, element, attribut) {
                scope.displayMessage = function(bongour){
                  console.log(bongour);
                }
            }
        };
    })
