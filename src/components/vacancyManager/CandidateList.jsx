import React from 'react';

export default React.createClass({
	getCandidates: function(){
		return this.props.candidates || [];
	},
	render: function() {
		return <div className="candidate-list">
		<table class="table table-striped">
		<thead>
		<tr><th>Nombre</th><th>Apellido</th><th>Email</th></tr>
		</thead>
		<tbody>
		
		{this.getCandidates().map(entry =>
			<tr>
	        <td>{entry.get('name')}</td> <td>{entry.get('apellido1')}</td> <td>{entry.get('email')}</td>
	        </tr>
	      )}
		
		</tbody>
		</table>
		</div>;
	}
});