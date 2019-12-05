import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Version } from '../../../types';

export interface Props {
  version: Version;
}

export const ServiceListItem = ({ version: { name, version } }: Props) => (
  <TableRow>
    <TableCell> {name} </TableCell>
    <TableCell />
    <TableCell> {version} </TableCell>
  </TableRow>
);
