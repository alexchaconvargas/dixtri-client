import React from 'react';

export default React.createClass({
	getCandidates: function(){
		return this.props.candidates || [];
	},
	render: function() {
		return <div className="candidate-list">
		{this.getCandidates().map(entry =>
	        <h1>{entry.get('name')}</h1>
	      )}
		</div>;
	}
});