angular.module('meteor-ng').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            template: '<contact-list></contact-list>'
        })
        .state('contactDetails', {
            url: '/contacts/:contactId',
            template: '<contact-details></contact-details>'
        });
    $urlRouterProvider.otherwise("/home");
});
