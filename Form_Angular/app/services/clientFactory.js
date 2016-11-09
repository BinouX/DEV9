angular.module("testApp")
    .factory("clientFactory", function() {
        var factory = {};
        var clients = [{
            name: 'Binoux',
            nom: 'Liebaert',
            age: 22,
            work: 'Pictime',
            img: 'joker',
            imgMultiple :[
              'joker',
              'batman',
              'mystere',
              'pingouin'
            ]
        }, {
            name: 'Alexis',
            nom: 'Verquin',
            age: 27,
            work: 'Coreye',
            img: 'batman',
            imgMultiple :[
              'joker',
              'batman',
              'mystere',
              'pingouin'
            ]
        }, {
            name: 'Valentin',
            nom: 'Liebaert',
            age: 20,
            work: 'IIID',
            img: 'pingouin',
            imgMultiple :[
              'joker',
              'batman',
              'mystere',
              'pingouin'
            ]
        }, {
            name: 'Lorinne',
            nom: 'Timothee',
            age: 25,
            work: 'Capgemini',
            img: 'quinn',
            imgMultiple :[
              'joker',
              'batman',
              'mystere',
              'pingouin'
            ]
        }];
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
        factory.getOtherClientByName = function(name){
          for(var i = 0; i < clients.length; i++){
            if(clients[i].name !== name.name){
                tabClient.push(clients[i]);
            }
          }
          return tabClient;
        };

        return factory;
    });
