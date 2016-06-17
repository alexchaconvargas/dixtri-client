export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function discardCandidate(entry) {
  return {
    type: 'DISCARD_CANDIDATE',
    entry
  };
}

export function addCandidate() {
  return {
    type: 'ADD_CANDIDATE'
  };
}

export function requestCandidate() {
  return {
    type: 'USER_FETCH_REQUESTED'
  };
}
