import React from 'react';

export default React.createClass({
	render: function() {
		return <div className="dev-toolbar">
			<button onClick={() => this.props.addCandidate()}>Add</button>
		</div>
	}
	});