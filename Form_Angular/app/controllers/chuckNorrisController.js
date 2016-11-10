angular.module("testApp").controller("chuckNorrisController", function($scope) {
    $scope.titre = "Tu es perdu, jeune padawan ?";
    $scope.message = "hello my lord";

    $scope.clients = [{
        lastname: "Moi",
        name: "Dieu",
        age: "Vieux"
    }];
});
