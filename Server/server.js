var http = require('http');
var express = require('express');
var app = express();

var clients = [{
    name: 'Binoux',
    nom: 'Liebaert the-god-blalblalba c\'est marrant ',
    age: 22,
    work: 'Pictime',
    img: 'joker',
    imgMultiple: [
        'joker',
        'batman',
        'mystere',
        'pingouin'
    ]
}, {
    name: 'alexis',
    nom: 'verquin',
    age: 27,
    work: 'Coreye',
    img: 'batman',
    imgMultiple: [
        'joker',
        'batman',
        'mystere',
        'pingouin'
    ]
}, {
    name: 'valentin',
    nom: 'liebaert',
    age: 20,
    work: 'IIID',
    img: 'pingouin',
    imgMultiple: [
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
    imgMultiple: [
        'joker',
        'batman',
        'mystere',
        'pingouin'
    ]
}];

var works = [{work: "Pictime"},{work: "IID"},{work: "Coreye"},{work: "Capgemini"},{work: "IBM"}]

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/test', function(req, res) {
    res.send("Merci");
});

app.get('/clients', function(req, res) {
    res.json(clients);
});

app.get('/work', function(req, res){
  res.json(works)
});

app.listen(4000, function() {
    console.log("Server Boot");
});
