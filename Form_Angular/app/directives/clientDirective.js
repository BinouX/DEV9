angular.module("testApp")
    .directive("client", function() {
        return {
            restrict: "E",
            templateUrl: "./app/directives/templates/clientTemplate.html",
            scope: {
                message: "@",
                data: '='
            },
            controller : function($scope){
              var hideImage = false;
              // element.text("Bongour");
              $scope.hideImg = function() {
                  hideImage = !hideImage;
              };
              $scope.hideImage = function() {
                  return hideImage;
              };
            },
            link: function(scope, element, attribut) {
              element.find('p').css('color', 'pink');
            }
        };
    })
