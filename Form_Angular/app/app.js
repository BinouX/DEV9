var appTest = angular.module("testApp", ["ngRoute"]);

angular.module("testApp").config(function($routeProvider) {
    $routeProvider.when('/aide', {
            templateUrl: "app/views/aide.html",
            controller: "chuckNorrisController"
        }).when('/', {
            templateUrl: "app/views/client.html",
            controller: "testController"
        }).when('/client/:name', {
            templateUrl: "app/views/infoClient.html",
            controller: "clientController"
        })
        .when('/client', {
            templateUrl: "app/views/client.html",
            controller: "testController"
        }).otherwise({
            templateUrl: "app/views/404.html"
        });
});

angular.module("testApp")
    .constant("AUTHOR", "Picitime")
    .constant("SETTINGS", {
        version: 1,
        email: "test@test.de",
        active: true
    });

angular.module("testApp").controller("testController", function($http, $scope, $rootScope, clientFactory, workFactory) {
        // $http.get("http://localhost:4000/clients").then(function(clients) {
        //     $scope.clients = clients.data;
        // });
        clientFactory.getAll().then(function(clients) {
            $scope.clients = clients.data;
            clientFactory.setClients(clients.data);
        });

        workFactory.getWorksAll().then(function(works) {
            $scope.works = works.data;
            workFactory.setWorks(works.data);
        });

        $scope.titre = "Formation Angular"
        $scope.lorem = clientFactory.getLorem();
        $scope.client = {
            name: '',
            nom: '',
            age: '',
            work: '',
            img: 'mystere',
            imgMultiple: []
        };

        if (!workFactory.isDataLoadedWorks()) {
            workFactory.getWorksAll().then(function(works) {
                workFactory.setWorks(works.data);
                $scope.works = works.data;
            });
        } else {
            $scope.works = works.data;
        }


        // $rootScope.clients = [{
        //     name: 'Binoux',
        //     nom: 'Liebaert',
        //     age: 22,
        //     work: 'Pictime',
        //     img: 'joker'
        // }, {
        //     name: 'Alexis',
        //     nom: 'Verquin',
        //     age: 27,
        //     work: 'Coreye',
        //     img: 'batman'
        // }, {
        //     name: 'Valentin',
        //     nom: 'Liebaert',
        //     age: 20,
        //     work: 'IIID',
        //     img: 'pingouin'
        // }, {
        //     name: 'Lorinne',
        //     nom: 'Timothee',
        //     age: 25,
        //     work: 'Capgemini',
        //     img: 'quinn'
        // }];

        // $scope.clients = clientFactory.getClients();

        var youngest = clientFactory.getAll().age;
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
            clientFactory.addClient($scope.client).then(function(res) {
                // workFactory.addWork($scope.client.work);
                $scope.clients.push($scope.client);
                $scope.client = {};
            });
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

        var showUpdateClient = false;
        $scope.showUpdateClient = function() {
            showUpdateClient = true;
        };

        $scope.getShowUpdateClient = function() {
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
            url: "#/",
            label: "Accueil"
        }, {
            url: "#/client",
            label: "Clients"
        }, {
            url: "#/aide",
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
    })
    .controller("clientController", function($scope, $routeParams, clientFactory, $interval, testService) {
        if (!clientFactory.isDataLoaded()) {
            clientFactory.getAll().then(function(clients) {
                clientFactory.setClients(clients.data);
                displayClient();
            });
        } else {
            displayClient();
        }

        function displayClient() {
            var ival = 0;
            var client = clientFactory.getClientByName($routeParams);
            var otherClient = clientFactory.getOtherClientByName($routeParams)

            slideShow = function(ii) {
                $scope.iImg = client.imgMultiple[ii];
            };

            $interval(function() {
                if (ival === client.imgMultiple.length) {
                    ival = 0;
                }
                slideShow(ival);
                ival++;
            }, 2000);
            $scope.otherClient = clientFactory.getClients();
            $scope.client = client;
        }
    });
