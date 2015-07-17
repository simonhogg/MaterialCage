"use strict";

(function(){

  angular
       .module('users')
       .controller('LoginController', [
          'userService', '$mdSidenav', '$mdBottomSheet', '$log', '$q'
       ]);

  /**
   * Login Controller
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function LoginController( userService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;

  }

})();
