import * as actions from './actions';
import * as sagas from './saga';
import { FETCH_REQUESTED } from './actions/types';
import {
  apiGetEndpointsSpy,
  recordSaga,
  resetSpies,
  setSpyState
} from '../../test/utils/sagaSpies';
import { errorMessage } from '../api/endpoints';

describe('Saga', () => {
  describe('Fetch Service Endpoints', () => {
    beforeEach(() => {
      resetSpies();
    });

    it('should dispatch a fetch succeded action on success, containing a service endpoint array', async () => {
      setSpyState(true);
      const initialAction = { type: FETCH_REQUESTED };
      const dispatched = await recordSaga(
        sagas.fetchServiceEndpoints,
        initialAction
      );

      expect(apiGetEndpointsSpy.mock.calls.length).toBe(1);
      expect(dispatched).toContainEqual(
        actions.fetchServiceEndpointsSucceded({})
      );
    });
    it('should dispatch a fetch failed action on failure with a general error message', async () => {
      setSpyState(false);
      const initialAction = { type: FETCH_REQUESTED };
      const dispatched = await recordSaga(
        sagas.fetchServiceEndpoints,
        initialAction
      );

      expect(apiGetEndpointsSpy.mock.calls.length).toBe(1);
      expect(dispatched).toContainEqual(
        actions.fetchServiceEndpointsFailed(errorMessage(0))
      );
    });
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
