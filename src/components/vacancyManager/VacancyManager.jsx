import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {List, Map} from 'immutable';
import {connect} from 'react-redux';

import Header from './Header';
import Filter from './Filter';
import CandidateList from './CandidateList';
import DevToolbar from './DevToolbar';
import * as actionCreators from '../../action_creators';

export const VacancyManager = React.createClass({
	mixins: [PureRenderMixin],
  render: function() {
    return <div className="vacancy-manager">
        <Header menuItems = {this.props.menuItems} />
        <Filter />
        <CandidateList {...this.props} />
        <DevToolbar {...this.props} />
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    menuItems: state.get('menuItems'),
    candidates: state.get('candidates')
  };
}

export const VacancyManagerContainer = connect(mapStateToProps, actionCreators)(VacancyManager);