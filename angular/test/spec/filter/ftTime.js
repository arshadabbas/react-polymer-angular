'use strict';
describe('FILTER: formatTime', function () {

	var filter;

	// load the filter's module
	beforeEach(function () {
		module('filter');
		inject(function($injector){
			filter = $injector.get('$filter')('formatTime');
		});
	});
	
	it('has a formatTime filter', inject(function($filter) {
        expect($filter('formatTime')).not.toBeNull();
    }));
	
	it('less than 59 seconds ago', function(){
		var onemin = new Date().getTime()-10*1000;
		expect(filter(onemin)).toBe('1 minute ago');
	});

	it('Greater than 59 seconds and less than 59 minuts', function(){
		var onemin = new Date().getTime()-10*60*1000;
		expect(filter(onemin)).toBe('10 minutes ago');
	});
	
	it('Greater than 59 minuts and less than 23.59 hours', function(){
		var onemin = new Date().getTime()-10*60*60*1000;
		expect(filter(onemin)).toBe('10 hours ago');
	});
	
	it('Greater than 23.59 hours', function(){
		var onemin = new Date().getTime()-24*60*60*1000;
		expect(filter(onemin)).toBe('1 day ago');
	});	
	
	
});