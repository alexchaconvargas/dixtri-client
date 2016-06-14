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