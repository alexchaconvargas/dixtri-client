import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from './Header';
import Filter from './Filter';
import {connect} from 'react-redux';
import CandidateList from './CandidateList'
import {List, Map} from 'immutable';

export const VacancyManager = React.createClass({
	mixins: [PureRenderMixin],
  render: function() {
    return <div className="vacancy-manager">
        <Header menuItems = {this.props.menuItems} />
        <Filter />
        <CandidateList candidates = {this.props.candidates} />
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    menuItems: state.get('menuItems'),
    candidates: state.get('candidates')
  };
}

export const VacancyManagerContainer = connect(mapStateToProps)(VacancyManager);