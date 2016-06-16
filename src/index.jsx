import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {mySaga} from './sagas'
import App from './components/App';
import reducer from './reducer';
import Home from './components/home/Home'
import {VacancyManagerContainer} from './components/vacancyManager/VacancyManager';

const sagaMiddleware = createSagaMiddleware();
debugger;
const store = createStore(reducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(sagaMiddleware));



sagaMiddleware.run(mySaga);
store.dispatch({
  type: 'SET_STATE',
  state: {
    menuItems: ['Home', 'AboutUs'],
    candidates: [
    			{'key' : 1 , 'name': 'Alfredo', 'apellido1': 'Santín', 'email' : 'alfredo@gmail.com'},
    			{'key' : 2 ,'name': 'Pedro', 'apellido1': 'Comí', 'email' : 'pedro@gmail.com'},
    			{'key' : 3 ,'name': 'Jose', 'apellido1': 'Roca', 'email' : 'jose@gmail.com'}]
	}
});



const routes = <Route component={App}>
  <Route path="/" component={Home} />
  <Route path="/vacancyManager" component={VacancyManagerContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);