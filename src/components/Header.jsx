import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderMixin],
	getMenuItems: function(){
		return this.props.menuItems || [];
	},
  	render: function() {
	  return <div className="header">
	  <a href="/#">HOME</a> -|-
	  <a href="/#/vacancyManager">vacancyManager</a>
	  </div>;
	}
});