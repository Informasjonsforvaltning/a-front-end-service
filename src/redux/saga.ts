import { put, all, takeLeading } from 'redux-saga/effects';
import * as api from '../api';
import {
  fetchServiceDetailsFailed,
  fetchServiceEndpointsFailed,
  fetchServiceEndpointsSucceded
} from './actions';
import { FETCH_REQUESTED } from './actions/types';

export function* fetchServiceEndpoints() {
  try {
    const response = yield api.getEndpoints();
    if (response.status === 200) {
      yield put(fetchServiceEndpointsSucceded(response.data.serviceEndpoints));
    } else {
      yield put(fetchServiceEndpointsFailed(response.error));
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
  yield all([takeLeading(FETCH_REQUESTED, fetchServiceEndpoints)]);
}
