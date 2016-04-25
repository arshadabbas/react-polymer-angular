'use strict';

var React = require('react/addons');
var moment = require('moment');

require('./Comment.css');

/*

 ## Example

   <CommentModel author={comment.author} key={comment.id}>
     {comment.msg}
   </CommentModel>

 */


var CommentModel = React.createClass({

  /*
     The author of the comment

     @attribute author
     @type String
   */

  /*
     The msg of the comment

     @children msg
     @type String
   */
	
  /* Filter for time difference */
  formatTime: function(timestamp) {
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
			str = min+' minute ago';
		} else if(min>59 && hr<23.59) {
			str = now.diff(timestamp, 'hours')+' hours ago';
		} else if(hr>23.59) {
			str = now.diff(timestamp, 'days')+' days ago';
		}
		return str;
	}
  },
  
  render: function () {
    return (
      <div className="comment">
        <h2 className="commentAuthor" ref="author">
          {this.props.author}
        </h2>
        <span ref="msg">{this.props.children}</span><br />
        <span ref="time">{this.formatTime(this.props.time)}</span>
      </div>
    );
  }
});


module.exports = CommentModel;

