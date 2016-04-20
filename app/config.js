'use strict';

require('angular');

module.exports = {
  location: location,
  routes: routes,
};

/**
 * @name location
 * @desc Configure html5 routing mode.
 */
location.$inject = ['$locationProvider'];
function location($locationProvider) {
  $locationProvider.html5Mode(true);
}

/**
 * @name routes
 * @desc Define valid application routes.
 */
routes.$inject = ['$stateProvider', '$urlRouterProvider'];
function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: 'it works'
      // controller: 'MemberIdCtrl',
      // controllerAs: 'vm',
    });
    
  $urlRouterProvider.otherwise('/');
}
