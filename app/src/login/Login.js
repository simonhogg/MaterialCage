(function() {
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('login', ['ngMaterial', 'firebase'])
    .factory("Auth", ["$firebaseAuth",
      function($firebaseAuth) {
        var ref = new Firebase("https://the-cage.firebaseio.com", "the-cage");
        return $firebaseAuth(ref);
      }
    ]);

})();
