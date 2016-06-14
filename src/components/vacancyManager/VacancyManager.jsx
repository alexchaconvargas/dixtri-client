import React from 'react';
import Header from './Header';
import Filter from './Filter';
import CandidateList from './CandidateList'
import {List} from 'immutable';

const menuItems = List.of('Home', 'AboutUs');

export default React.createClass({
  render: function() {
    return <div className="vacancy-manager">
        <Header menuItems = {menuItems} />
        <Filter />
        <CandidateList />
    </div>;
  }
});