import React from 'react';
import Header from './Header';
import Filter from './Filter';
import CandidateList from './CandidateList'
export default React.createClass({
  render: function() {
    return <div className="vacancy-manager">
        <Header />
        <Filter />
        <CandidateList />
    </div>;
  }
});