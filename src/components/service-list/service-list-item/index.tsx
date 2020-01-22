import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ServiceEndpoint } from '../../../types';
import { insertTestId, TestIdValues } from '../../../../test/utils/unitUtils';
import { UPDATE_REQUEST } from '../../../redux/actions/types';

export interface Props {
  version: ServiceEndpoint;
}
const useStyles = makeStyles({
  button: {
    float: 'right'
  }
});

export const ServiceListItem = ({ version: { name, url } }: Props) => {
  const loggedIn: boolean = useSelector((state: any) => {
    return state.authState.get('loggedIn');
  });
  const dispatch = useDispatch();
  const classes = useStyles();

  const [editing, setEditing] = useState(false);
  const EditCell =
    loggedIn && !editing ? (
      <TableCell>
        <Button
          {...insertTestId(TestIdValues.serviceList.editButtons)}
          onClick={() => setEditing(true)}
        >
          Edit
        </Button>
      </TableCell>
    ) : (
      <TableCell>
        <Button
          {...insertTestId(TestIdValues.serviceList.editButtons)}
          onClick={() => setEditing(false)}
          className={classes.button}
        >
          Cancel
        </Button>
      </TableCell>
    );

  const urlCell =
    loggedIn && editing ? (
      <TableCell>
        <TextField label={url} />
        <Button onClick={() => dispatch({ type: UPDATE_REQUEST })}>OK</Button>
      </TableCell>
    ) : (
      <TableCell>{url}</TableCell>
    );
  return (
    <TableRow {...insertTestId(TestIdValues.serviceList.listItem)}>
      <TableCell> {name} </TableCell>
      {urlCell}
      {EditCell}
    </TableRow>
  );
};
