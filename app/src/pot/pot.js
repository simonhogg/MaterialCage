(function() {
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('pot', ['ngMaterial', 'firebase', 'Auth'])
    .factory("potDb", ["$firebaseAuth",
      function($firebaseArray) {
        var newId = Math.round(Math.random() * 10000000);
        var ref = new Firebase("https://the-cage.firebaseio.com" + $scope.authData.uid);
        return $firebaseArray(ref);
      }
    ]);

})();
