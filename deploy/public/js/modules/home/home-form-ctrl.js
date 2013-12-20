/**
 * Home controller definition
 * @scope Controllers
 */
define(['./module'], function (controllers) {
  'use strict';

  controllers.controller('HomeFormController', function ($scope) {

    $scope.items = [
    	{title : "BBB Fo num", desc : "A really 111222 nice foo item"},
    	{title : "BBB Babaz num", desc : "A really nice 434 foo item"},
    	{title : "BBB Chico ki num", desc : "A really nice 424234foo item"},
    	{title : "BBB Fodpum", desc : "A really 78657 nice foo item"},
    	{title : "BBB Babaji", desc : "A really 4346900 nice foo item"}
    ];
  });
});