import React from 'react';

export default React.createClass({
	getMenuItems: function(){
		return this.props.menuItems || [];
	},
  	render: function() {
	  return <div className="header">
	      {this.getMenuItems().map(entry =>
	        <button key={entry}>
	          <h1>{entry}</h1>
	        </button>
	      )}
	  </div>;
	}
});


