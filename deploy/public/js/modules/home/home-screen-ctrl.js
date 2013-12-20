/**
 * Home controller definition
 * @scope Controllers
 */
define(['./module'], function (controllers) {
  'use strict';

  controllers.controller('HomeController', function ($scope) {

    $scope.items = [
    	{title : "Foo num", desc : "A really 111222 nice foo item"},
    	{title : "Babaz num", desc : "A really nice 434 foo item"},
    	{title : "Chico ki num", desc : "A really nice 424234foo item"},
    	{title : "Fodpum", desc : "A really 78657 nice foo item"},
    	{title : "Babaji", desc : "A really 4346900 nice foo item"}
    ];
  });
});