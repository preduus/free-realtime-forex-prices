import { all, fork } from 'redux-saga/effects';

import profileSaga from './user/profile/sagas';

export default function* rootSaga() {
  yield all([
    fork(profileSaga),
  ]);
}