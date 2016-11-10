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
