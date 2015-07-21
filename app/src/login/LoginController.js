"use strict";

(function() {

  angular
    .module('login')
    .controller('LoginController', ['$log', '$q','$scope','$firebaseAuth', "Auth", LoginController]);

  /**
   * Login Controller
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function LoginController($log, $q, $scope, $firebaseAuth, Auth) {
    var self = this;

    $scope.auth = Auth;

    // any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
    });

  }
})();
