import {Map} from 'immutable';
import {userGenerator} from './devTools';

function setState(state, newState) {
  return state.merge(newState);
}

function discardCandidate(state, key) {
  const newCandidates = state.get('candidates').filter((elem) => {
		return elem != key
	});
   return state.set('candidates', newCandidates);
}

function addCandidate(state){
  const newCandidates = state.get('candidates').push(Map(userGenerator(state)));
  return state.set('candidates', newCandidates );
}


export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
        return setState(state, action.state);
    case 'DISCARD_CANDIDATE':
        return discardCandidate(state, action.entry);
    case 'ADD_CANDIDATE':
        return addCandidate(state);
  }
  return state;
}
