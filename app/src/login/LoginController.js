"use strict";

(function() {

  angular
    .module('login')
    .controller('LoginController', ['$log', '$q', LoginController, '$firebaseAuth', '$scope']);

  /**
   * Login Controller
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function LoginController($log, $q, $scope, $firebaseAuth) {
    var self = this;

    var ref = new Firebase("https://docs-sandbox.firebaseio.com");
    var auth = $firebaseAuth(ref);

    $scope.login = function() {
      $scope.authData = null;
      $scope.error = null;

      auth.$authAnonymously().then(function(authData) {
        $scope.authData = authData;
      }).catch(function(error) {
        $scope.error = error;
      });
    };

  }
})();
