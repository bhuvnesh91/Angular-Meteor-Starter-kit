angular.module('meteor-ng').directive('contactList', function () {
    return {
        restrict: 'E',
        controller: 'MainController',
        link: function () {
        },
        templateUrl: 'client/templates/contact-list.html'
    }
});