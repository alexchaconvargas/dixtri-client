import React from 'react';

export default React.createClass({
	render: function() {
		return <div className="dev-toolbar">
			<button onClick={() => this.props.addCandidate()}>Create one</button>
			<button onClick={() => this.props.requestCandidate()}>Request One</button>
		</div>
	}
});
