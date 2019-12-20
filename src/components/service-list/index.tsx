import React from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { useSelector } from 'react-redux';
import { ServiceListItem } from './service-list-item';
import { EndpointVersion } from '../../types';
import { insertTestId, TestIdValues } from '../../../test/utils/unitUtils';

export const ServiceList = () => {
  const endpointVersions: Array<EndpointVersion> = useSelector(
    (state: any) => state.serviceEndpoints.get('serviceEndpoints').toJS()
  );
  return (
    <Table {...insertTestId(TestIdValues.serviceList.component)}>
      <TableHead>
        <TableRow>
          <TableCell>name</TableCell>
          <TableCell>url</TableCell>
          <TableCell>version</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {endpointVersions.map(value => (
          <ServiceListItem key={value.name} version={value} />
        ))}
      </TableBody>
    </Table>
  );
};
