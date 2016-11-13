angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('jobsDetailBusiness', {
    url: '/jobsdetailbusiness',
    templateUrl: 'templates/jobsDetailBusiness.html',
    controller: 'jobsDetailBusinessCtrl'
  })

  .state('jobsDetailCustomer', {
    url: '/jobdetailcustomer',
    templateUrl: 'templates/jobsDetailCustomer.html',
    controller: 'jobsDetailCustomerCtrl'
  })

  .state('jobsListCustomer', {
    url: '/jobslistcustomer',
    templateUrl: 'templates/jobsListCustomer.html',
    controller: 'jobsListCustomerCtrl'
  })

  .state('jobsListBusiness', {
    url: '/jobslistbusiness',
    templateUrl: 'templates/jobsListBusiness.html',
    controller: 'jobsListBusinessCtrl'
  })

  .state('jobsListTechnician', {
    url: '/jobslisttechnician',
    templateUrl: 'templates/jobsListTechnician.html',
    controller: 'jobsListTechnicianCtrl'
  })

  .state('login', {
    url: '/loginpage',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('customer', {
    url: '/customerloggedin',
    templateUrl: 'templates/customer.html',
    controller: 'customerCtrl'
  })

  .state('owner', {
    url: '/ownerloggedin',
    templateUrl: 'templates/owner.html',
    controller: 'ownerCtrl'
  })

  .state('technician', {
    url: '/technicianloggedin',
    templateUrl: 'templates/technician.html',
    controller: 'technicianCtrl'
  })

  .state('createJob', {
    url: '/createJob',
    templateUrl: 'templates/createJob.html',
    controller: 'createJobCtrl'
  })

  .state('fixMyProblem', {
    url: '/fixMyProblem',
    templateUrl: 'templates/fixMyProblem.html',
    controller: 'fixMyProblemCtrl'
  })

$urlRouterProvider.otherwise('/loginpage')

  

});