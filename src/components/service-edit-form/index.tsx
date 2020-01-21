import React from 'react';
import Button from '@material-ui/core/Button';
import { insertTestId } from '../../../test/utils/unitUtils';

interface Props {
  testId: string;
  editMode: boolean;
  cancel(): void;
  submit(): void;
}
export const EditForm = (props: Props) => {
  return (
    <div {...insertTestId(props.testId)}>
      <p>Edting form</p>
      <form />
      <Button onClick={() => props.cancel()}>Cancel</Button>
    </div>
  );
};
