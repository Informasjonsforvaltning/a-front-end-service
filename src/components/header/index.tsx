import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { insertTestId, TestIdValues } from '../../../test/utils/unitUtils';
import { LOGIN_REQUESTED, LOGOUT_REQUESTED } from '../../redux/actions/types';

const useStyles = makeStyles({
  button: {
    float: 'right'
  }
});

export const Header = () => {
  const classes = useStyles();
  const loggedIn: boolean = useSelector((state: any) => {
    return state.authState.isLoggedIn;
  });
  const dispatch = useDispatch();
  let button;
  let infoText;
  if (loggedIn) {
    button = (
      <Button
        className={classes.button}
        onClick={() => dispatch({ type: LOGOUT_REQUESTED })}
        {...insertTestId(TestIdValues.header.logoutButton)}
      >
        Logout
      </Button>
    );
    infoText = (
      <Card {...insertTestId(TestIdValues.header.infoText)}>
        <CardContent>
          <Typography>Logged in as admin</Typography>
        </CardContent>
      </Card>
    );
  } else {
    button = (
      <Button
        className={classes.button}
        onClick={() => dispatch({ type: LOGIN_REQUESTED })}
        {...insertTestId(TestIdValues.header.loginButton)}
      >
        Login
      </Button>
    );
  }
  return (
    <div {...insertTestId(TestIdValues.header.component)}>
      {infoText}
      {button}
    </div>
  );
};
