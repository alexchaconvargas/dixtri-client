import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function discardCandidate(state, key) {
  const newCandidates = state.get('candidates').filter((elem) => {
		return elem != key
	});
   return state.set('candidates', newCandidates);
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'DISCARD_CANDIDATE':
	return discardCandidate(state, action.entry);
  }
  return state;
}
