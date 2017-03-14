'use strict';

describe('filter', function(){
   var checkmarkFilter;
   beforeEach(module('phonecatFiltersModule'));
   beforeEach(inject(function(_checkmarkFilter_){
       checkmarkFilter = _checkmarkFilter_;
   }));
   
   describe('checkmark', function(){
      it('should convert boolean to unicode checkmark', function(){
          expect(checkmarkFilter(true)).toBe('\u2713');
      });
   });
});