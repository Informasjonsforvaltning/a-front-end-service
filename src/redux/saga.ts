import { put, all, takeLatest } from 'redux-saga/effects';
import * as api from '../api';
import {
  fetchServiceDetailsFailed,
  fetchServiceEndpointsSucceded
} from './actions';
import { FETCH_REQUESTED } from './actions/types';

export function* fetchServiceEndpoints() {
  try {
    const response = yield api.getEndpoints();
    if (response.status === 200) {
      yield put(fetchServiceEndpointsSucceded(response.data.serviceEndpoints));
    } else {
      yield put(fetchServiceDetailsFailed(response.error));
    }
  } catch (error) {
    yield put(
      fetchServiceDetailsFailed(
        'An unknown error occured while attempting to fecth data from server'
      )
    );
  }
}

export default function* saga() {
  yield all([takeLatest(FETCH_REQUESTED, fetchServiceEndpoints)]);
}
