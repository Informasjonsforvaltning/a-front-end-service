import { runSaga } from 'redux-saga';
import rootsaga from './saga';

// import { FETCH_REQUESTED } from './actions/types';

async function recordSaga() {
  const dispatched: any[] = [];

  await runSaga(
    {
      dispatch: action => dispatched.push(action)
    },
    rootsaga
  ).result;

  return dispatched;
}

describe('Saga', () => {
  recordSaga();
  //console.log(recordSaga);

  describe('Fetch Service Endpoints', () => {
    it('should initiate a fetch succeded action on success, containing a service endpoint array', () => {});
    it('should initiate a fetch failed action on failure with a general error message', () => {});
  });
  describe('Post Service Endpoint', () => {
    it('should initiate a post succeded action on success, containg a service endpoint array', () => {});
    it('should initiate a post failed action on failure with a server error message', () => {});
    it('should initiate a post failed action on failure with a unauthorized error message', () => {});
    it('should initiate a post failed action on failure with a conflict error message', () => {});
    it('should initiate a post failed action on failure with a bad request message', () => {});
  });
  describe('Fetch Service Details', () => {
    it('should initiate a fetch succeded action on success, containg a service endpoint array', () => {});
    it('should initiate a fetch failed action on failure with a general error message', () => {});
  });
});
