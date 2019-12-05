import React from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { ServiceListItem } from './service-list-item';

const placeholder = [{ name: 'a-backend-service', version: '1.0.3' }];

export const ServiceList = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>name</TableCell>
        <TableCell>url</TableCell>
        <TableCell>version</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {placeholder.map(value => (
        <ServiceListItem key={value.name} version={value} />
      ))}
    </TableBody>
  </Table>
);
