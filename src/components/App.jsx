import React from 'react';
import {List, Map} from 'immutable';
import Header from './Header';

export default React.createClass({
  render: function() {
    return <div>
    	<Header />
      {this.props.children}
    </div>
  }
});