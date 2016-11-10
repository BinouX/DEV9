angular.module("testApp")
    .factory("clientFactory", function($http) {
        var factory = {};
        // $http.get("http://localhost:4000/clients").then(function(clients) {
        //     $scope.clients = clients.data;
        // });
        var clients = null;

        factory.isDataLoaded = function() {
            return (clients === null) ? false : true;
        };

        factory.setClients = function(data){
          clients = data;
        };

        factory.getAll = function() {
                return $http.get("http://localhost:4000/clients");
            }
            // var clients = [{
            //     name: 'Binoux',
            //     nom: 'Liebaert the-god-blalblalba c\'est marrant ',
            //     age: 22,
            //     work: 'Pictime',
            //     img: 'joker',
            //     imgMultiple :[
            //       'joker',
            //       'batman',
            //       'mystere',
            //       'pingouin'
            //     ]
            // }, {
            //     name: 'alexis',
            //     nom: 'verquin',
            //     age: 27,
            //     work: 'Coreye',
            //     img: 'batman',
            //     imgMultiple :[
            //       'joker',
            //       'batman',
            //       'mystere',
            //       'pingouin'
            //     ]
            // }, {
            //     name: 'valentin',
            //     nom: 'liebaert',
            //     age: 20,
            //     work: 'IIID',
            //     img: 'pingouin',
            //     imgMultiple :[
            //       'joker',
            //       'batman',
            //       'mystere',
            //       'pingouin'
            //     ]
            // }, {
            //     name: 'Lorinne',
            //     nom: 'Timothee',
            //     age: 25,
            //     work: 'Capgemini',
            //     img: 'quinn',
            //     imgMultiple :[
            //       'joker',
            //       'batman',
            //       'mystere',
            //       'pingouin'
            //     ]
            // }];

        var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        factory.getClients = function() {
            return clients;
        };
        factory.getClientByName = function(name) {
            for (var i = 0; i < clients.length; i++) {
                if (clients[i].name === name.name) {
                    return clients[i];
                }
            }
            return null;
        };
        var tabClient = [];
        factory.getOtherClientByName = function(name) {
            for (var i = 0; i < clients.length; i++) {
                if (clients[i].name !== name.name) {
                    tabClient.push(clients[i]);
                }
            }
            return tabClient;
        };

        factory.getLorem = function() {
            return lorem;
        };

        factory.addClient = function(client){
          return $http.post("http://localhost:4000/clients", client)
        };

        return factory;
    });
