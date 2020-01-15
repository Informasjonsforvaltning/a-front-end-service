import { put, all, takeLatest } from 'redux-saga/effects';
import * as api from '../api';
import {
  fetchServiceDetailsFailed,
  fetchServiceEndpointsSucceded
} from './actions';
import { FETCH_REQUESTED } from './actions/types';

export function* fetchServiceEndpoints() {
  try {
    const data = yield api.getEndpoints();
    if (data.status === 200) {
      yield console.log('IN FETCH SERVICE OK');
      yield put(fetchServiceEndpointsSucceded(data.serviceEndpoints));
    } else {
      yield put(fetchServiceDetailsFailed(data.error));
    }
  } catch (error) {
    yield put(
      fetchServiceDetailsFailed(
        'An unkown error occured while attempting to fecth data'
      )
    );
  }
}

export default function* saga() {
  yield all([takeLatest(FETCH_REQUESTED, fetchServiceEndpoints)]);
}
