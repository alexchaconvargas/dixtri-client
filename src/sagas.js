import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import fetchUserApi from './api/api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    const user = yield call(fetchUserApi);
      var b = yield fetch('/candidates');
      var c = yield fetch('/candidates');
      console.log("a");
      var c = yield fetch('/candidates');
      console.log("b");
      console.log(b);
      console.log(c);
      const user2 = yield call(fetchUserApi);
      console.log(user);
      //yield put({type: "USER_FETCH_SUCCEEDED", user});
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield* takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }
  
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export function* mySaga() {
  yield* takeLatest("USER_FETCH_REQUESTED", fetchUser);
}