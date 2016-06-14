import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function discardCandidate(state, entry) {
  const currentCandidates = state.get('candidates');
  console.log(currentCandidates);
    return state.set('candidates', currentCandidates.pop());
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