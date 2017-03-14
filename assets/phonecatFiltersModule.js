'use strict';

angular.module('phonecatFiltersModule', []).filter('checkmark', function(){
   return function(input){
       return input ? '\u2713':'\u2718';
   }    
});