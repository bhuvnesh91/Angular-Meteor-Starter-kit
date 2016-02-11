/**
 * Created by BHUVNESH on 2/10/2016.
 */
angular.module('meteor-ng').controller('MainController', function ($scope) {
    $scope.contact = {};
    $scope.helpers({
        contacts: function () {
            return Contacts.find({});
        }
    });

    $scope.deleteContact = function (id) {
        Contacts.remove({_id: id});
    }

    $scope.addContact = function () {
        Contacts.insert($scope.contact);
        $scope.contact = {};
    }

    $scope.editContact = function (contact) {
        $scope.contactToUpdate = contact;
    }

    $scope.updateContact = function () {
        Contacts.remove({_id: $scope.contactToUpdate._id});
        console.log($scope.contactToUpdate);
        delete $scope.contactToUpdate.$$hashKey;
        console.log($scope.contactToUpdate);
        Contacts.insert($scope.contactToUpdate);
        $scope.contactToUpdate = {};
    }
});