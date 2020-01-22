let loggedIn = false;
const dispatchContent = {};

export const mockRedux = jest.mock('react-redux', () => ({
  useSelector: () => loggedIn,
  useDispatch: () => dispatchContent
}));

export function setLoginState(newState: boolean) {
  console.log('SETTING STATE');
  loggedIn = newState;
  console.log(newState);
}
