import { fromJS } from 'immutable';
import reducer from './authReducer';
import { loginFailed, loginSucceded } from '../actions';

describe('AuthStateReducer', () => {
  describe('Login', () => {
    const originalState = {
      loggedIn: false,
      attempts: 0
    };

    it('should return a state with loggedIn true and 0 attempts', () => {
      const resultState = reducer(
        fromJS(originalState),
        loginSucceded('Admin user')
      );
      expect(resultState.get('loggedIn')).toBeTruthy();
      expect(resultState.get('attempts')).toBe(0);
    });

    it('should return a state with loggedIn true and 0 attempts after several failed attempts', () => {
      originalState.attempts = 2;
      const resultState = reducer(
        fromJS(originalState),
        loginSucceded('Admin user')
      );
      expect(resultState.get('loggedIn')).toBeTruthy();
      expect(resultState.get('attempts')).toBe(0);
    });

    it('should return a state with loggedIn false, and 1 attempt', () => {
      originalState.attempts = 0;
      const resultState = reducer(
        fromJS(originalState),
        loginFailed('error in usernmae or passwer')
      );

      expect(resultState.get('loggedIn')).toBeFalsy();
      expect(resultState.get('attempts')).toBe(1);
    });

    it('should return a state with loggedIn false and 3 attempts', () => {
      originalState.attempts = 2;
      const resultState = reducer(
        fromJS(originalState),
        loginFailed('error in username or password')
      );

      expect(resultState.get('loggedIn')).toBeFalsy();
      expect(resultState.get('attempts')).toBe(3);
    });
  });
  describe('Logut', () => {
    it('should return a state with loggedIn false and 0 attempts', () => {});
  });
});
