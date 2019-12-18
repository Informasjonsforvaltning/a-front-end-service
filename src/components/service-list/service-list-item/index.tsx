import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { EndpointVersion } from '../../../types';
import { insertTestId, TestIdValues } from '../../../../test/utils/unitUtils';

export interface Props {
  version: EndpointVersion;
}

export const ServiceListItem = ({ version: { name, url } }: Props) => (
  <TableRow {...insertTestId(TestIdValues.serviceList.listItem)}>
    <TableCell> {name} </TableCell>
    <TableCell />
    <TableCell> {url} </TableCell>
  </TableRow>
);
