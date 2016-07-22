angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.sMHacks', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/sMHacks.html',
        controller: 'sMHacksCtrl'
      }
    }
  })

  .state('tabsController.sMHacks2', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/sMHacks2.html',
        controller: 'sMHacks2Ctrl'
      }
    }
  })

  .state('tabsController.sMHacks3', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/sMHacks3.html',
        controller: 'sMHacks3Ctrl'
      }
    }
  })

  .state('tabsController.sMHacks4', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/sMHacks4.html',
        controller: 'sMHacks4Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});