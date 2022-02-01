import { ProfileTypes } from './types';
import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../../../../providers/api';

import { ProfileSuccess, ProfileError } from './actions';

function* getProfileSaga() {
  try {
    const profile: AxiosResponse = yield call(API.get, '/broker-api/getprofile', {}, {});
    const avatar: AxiosResponse = yield call(API.get, '/get-user-avatar', {}, {});

    yield put(ProfileSuccess({...profile.data.result, avatar: avatar.data.result}));
  } catch (err) {
    yield put(ProfileError());
  }
}

function* profileSaga() {
  yield takeEvery(ProfileTypes.GET_PROFILE, getProfileSaga)
}

export default profileSaga;