import { runSaga } from 'redux-saga';
import * as api from '../../src/api';
import { Result } from '../../src/api/types';
import { errorMessage } from '../../src/api/endpoints';

let successState = true;

export async function recordSaga(saga: any, initialAction: any) {
  const dispatched: unknown[] = [];
  await runSaga(
    {
      dispatch: action => dispatched.push(action)
    },
    saga,
    initialAction
  )
    .toPromise()
    .then(result => {
      return result;
    })
    .catch(error => {
      return error;
    });

  return dispatched;
}

export const apiGetEndpointsSpy = jest
  .spyOn(api, 'getEndpoints')
  .mockImplementation(() => {
    return new Promise<Result>((resolve, reject) => {
      if (successState) {
        resolve({ status: 200, data: { serviceEndpoints: {} } });
      } else {
        const errorMsg = { error: errorMessage(0) };
        reject(errorMsg);
      }
    })
      .then(result => {
        return result;
      })
      .catch(error => {
        return error;
      });
  });

export function setSpyState(newState: boolean) {
  successState = newState;
}

export function resetSpies() {
  apiGetEndpointsSpy.mockClear();
}
