import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import VacancyManager from './components/vacancyManager/VacancyManager';

const routes = <Route component={App}>
  <Route path="/" component={VacancyManager} />
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);