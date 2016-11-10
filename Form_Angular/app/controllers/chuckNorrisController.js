angular.module("testApp").controller("chuckNorrisController", function($scope) {
    $scope.titre = "Tu es perdu, jeune padawan ?";
    $scope.message = "hello my lord";

    $scope.clients =[{
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
});
