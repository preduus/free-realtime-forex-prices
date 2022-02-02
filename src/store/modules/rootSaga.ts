import { all, fork } from 'redux-saga/effects';

import profileSaga from './user/profile/sagas';
import activesSaga from './broker/actives/sagas';

export default function* rootSaga() {
  yield all([
    fork(profileSaga),
    fork(activesSaga),
  ]);
}