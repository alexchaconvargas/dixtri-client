import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import reducer from './reducer';
import {VacancyManagerContainer} from './components/vacancyManager/VacancyManager';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    menuItems: ['Home', 'AboutUs'],
    candidates: [
    			{'_id' : 1 , 'name': 'Alfredo', 'apellido1': 'Santín', 'email' : 'alfredo@gmail.com'},
    			{'_id' : 2 ,'name': 'Pedro', 'apellido1': 'Comí', 'email' : 'pedro@gmail.com'},
    			{'_id' : 3 ,'name': 'Jose', 'apellido1': 'Roca', 'email' : 'jose@gmail.com'}]
	}
});

console.log(store);

const routes = <Route component={App}>
  <Route path="/" component={VacancyManagerContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);