var appTest = angular.module("testApp", []);

appTest.controller("testController", function($scope) {
        $scope.titre = "Formation Angular"
        $scope.client = {
            name: '',
            nom: '',
            age: '',
            work: '',
            img: 'mystere'
        };
        $scope.clients = [{
            name: 'Binoux',
            nom: 'Liebaert',
            age: 22,
            work: 'Pictime',
            img: 'joker'
        }, {
            name: 'Alexis',
            nom: 'Verquin',
            age: 27,
            work: 'Coreye',
            img: 'batman'
        }, {
            name: 'Valentin',
            nom: 'Liebaert',
            age: 20,
            work: 'IIID',
            img: 'pingouin'
        }, {
            name: 'Lorinne',
            nom: 'Timothee',
            age: 25,
            work: 'Capgemini',
            img: 'quinn'
        }];
        var youngest = $scope.clients[0].age;
        var getYoungest = function() {
            $scope.clients.forEach(function(client) {
                if (youngest > client.age) {
                    youngest = client.age;
                }
            });
            return youngest;
        }
        $scope.myClass = "class1";
        $scope.plusJeune = function(age) {
            if (age === getYoungest()) {
                return "class2";
            } else {
                return "class1";
            }
        }

        var orderByValue = null;
        var orderByVluePrec = 'null';
        $scope.orderBy = function(value) {
            if (value === 'nom' && orderByVluePrec !== 'nom') {
                orderByValue = "nom";
                orderByVluePrec = "nom";
            } else if (value === 'nom' && orderByVluePrec === 'nom') {
                orderByValue = "-nom";
                orderByVluePrec = "-nom";
            } else if (value === 'name' && orderByVluePrec !== 'name') {
                orderByValue = "name";
                orderByVluePrec = "name";
            } else if (value === 'name' && orderByVluePrec === 'name') {
                orderByValue = "-name";
                orderByVluePrec = "-name";
            } else if (value === 'age' && orderByVluePrec !== 'age') {
                orderByValue = "age";
                orderByVluePrec = "age";
            } else if (value === 'age' && orderByVluePrec === 'age') {
                orderByValue = "-age";
                orderByVluePrec = "-age";
            } else if (value === 'work' && orderByVluePrec !== 'work') {
                orderByValue = "work";
                orderByVluePrec = "work";
            } else {
                orderByValue = "-work";
                orderByVluePrec = "-work";
            }
        };

        $scope.getOrder = function() {
            return orderByValue;
        };

        var isDisable = true;
        var isDisableName = true;
        var isDisableNom = true;
        var isDisableAge = true;
        var isDisableWork = true;
        $scope.saveClient = function() {
            if (isDisable) {
                return;
            }
            isDisable = true;
            $scope.clients.push($scope.client);
            $scope.client = {};
        };

        $scope.isDisable = function() {
            if (typeof $scope.client.name === "undefined" &&
                typeof $scope.client.nom === "undefined" &&
                typeof $scope.client.work === "undefined" &&
                $scope.client.age === '' || isNaN($scope.client.age)
            ) {
                return isDisable;
            }

            if ($scope.client.name.length > 5) {
                isDisableNom = false;
            }
            if ($scope.client.name.length > 5) {
                isDisableName = false;
            }
            if ($scope.client.age !== "" && isNaN($scope.client.age)) {
                isDisable = false;
            }
            if ($scope.client.work !== "") {
                isDisable = false;
            }

            if (isDisableName === isDisableNom === isDisableAge === isDisableWork === false) {
                isDisable = false;
            }
            return isDisable;
        };

        var showUpdateClient=false;
        $scope.showUpdateClient = function(){
          showUpdateClient = true;
        };

        $scope.getShowUpdateClient = function(){
            return showUpdateClient;
        };

        $scope.updateClient = function(name) {

        };

        $scope.removeClient = function(name) {
            var seekClients = 0
            $scope.clients.forEach(function(client) {
                if (client.name === name.name && client.nom === name.nom) {
                    $scope.clients.splice(seekClients, 1);
                }
                seekClients++;
            })
        };
    })
    .controller("menuController", function($scope) {
        $scope.menus = [{
            url: "#",
            label: "Accueil"
        }, {
            url: "#",
            label: "Clients"
        }, {
            url: "#",
            label: "Aide"
        }];
    })
    .controller("addClientController", function($scope) {
        var isVisible = false;
        $scope.showHideClient = function() {
            isVisible = !isVisible;
        };

        $scope.getVisible = function() {
            return isVisible;
        };
    });
