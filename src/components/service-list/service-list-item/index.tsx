import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Version } from '../../../types';
import { insertTestId, TestIdValues } from '../../../../test/utils/unitUtils';

export interface Props {
  version: Version;
}

export const ServiceListItem = ({ version: { name, version } }: Props) => (
  <TableRow {...insertTestId(TestIdValues.serviceList.listItem)}>
    <TableCell> {name} </TableCell>
    <TableCell />
    <TableCell> {version} </TableCell>
  </TableRow>
);
