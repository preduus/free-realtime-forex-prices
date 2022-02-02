import { ActivesTypes } from './types';
import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../../../../providers/api';

import ForexContract from '../../../../providers/broker/contracts/ForexActivesGraphQLContract';

import { ActivesSuccess, ActivesError } from './actions';

function* getActivesSaga() {
  try {
    const actives: AxiosResponse = yield call(API.post, '/fininfo', ForexContract, {})
    yield put(ActivesSuccess(actives.data.data.forex));
  } catch (err) {
    yield put(ActivesError());
  }
}

function* activesSaga() {
  yield takeEvery(ActivesTypes.GET_ACTIVES, getActivesSaga)
}

export default activesSaga;