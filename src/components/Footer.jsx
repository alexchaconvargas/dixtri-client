import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderMixin],
	getMenuItems: function(){
		return this.props.menuItems || [];
	},
  	render: function() {
	  return <div className="footer">
	  </div>;
	}
});