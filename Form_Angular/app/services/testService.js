angular.module("testApp")
    .service("testService", function() {
        var players = ["Asmodée", "Botis", "Diablo"];
        this.getPlayers = function() {
            return players;
        }
    });
