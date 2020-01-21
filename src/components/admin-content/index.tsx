import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { insertTestId, TestIdValues } from '../../../test/utils/unitUtils';
import { EditForm } from '../service-edit-form';

export interface AdminContentProps {
  onAddServiceClicked(): void;
}

const useStyles = makeStyles({
  button: {
    float: 'right'
  }
});
export const AdminContent = (props: AdminContentProps) => {
  const classes = useStyles();
  const [editing, setEditing] = useState(false);

  let component;
  if (editing) {
    component = (
      <EditForm
        testId={TestIdValues.adminContent.addForm}
        editMode={false}
        submit={props.onAddServiceClicked}
        cancel={() => setEditing(false)}
      />
    );
  } else {
    component = (
      <Button
        className={classes.button}
        onClick={() => setEditing(true)}
        {...insertTestId(TestIdValues.adminContent.addButton)}
      >
        Add service
      </Button>
    );
  }

  return (
    <div {...insertTestId(TestIdValues.adminContent.component)}>
      {component}
    </div>
  );
};
