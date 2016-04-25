'use strict';

/**
 * @ngdoc filter
 * @name angularApp.filter:formatTime
 * @description
 * # comment
 */
angular.module('filter', [])
.filter('formatTime', [function() {
  function func(timestamp){
	if(timestamp !== undefined) {
		var now = moment(new Date());
		var sec = now.diff(timestamp, 'seconds');
		var min = now.diff(timestamp, 'minutes');
		var hr = now.diff(timestamp, 'hours', true);
		var day = now.diff(timestamp, 'days', true);
		var str;
		if(sec<59) {
			str = '1 minute ago';
		} else if(sec>59 && min<59) {
			str = min+' minutes ago';
		} else if(min>59 && hr<23.59) {
			var label = now.diff(timestamp, 'hours')>1 ? ' hours ago':' hour ago'
			str = now.diff(timestamp, 'hours')+''+label;
		} else if(hr>23.59) {
			var label = now.diff(timestamp, 'days')>1 ? ' days ago':' day ago'
			str = now.diff(timestamp, 'days')+''+label;
		}
		
		return str;
	}
  }
  return func;
}]);