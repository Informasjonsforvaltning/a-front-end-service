import React from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { useDispatch, useSelector } from 'react-redux';
import { ServiceListItem } from './service-list-item';
import { ServiceEndpoint } from '../../types';
import { insertTestId, TestIdValues } from '../../../test/utils/unitUtils';
import { FETCH_REQUESTED } from '../../redux/actions/types';

export const ServiceList = () => {
  const endpointVersions: Array<ServiceEndpoint> = useSelector((state: any) =>
    state.serviceEndpoints.get('serviceEndpoints').toJS()
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (endpointVersions.length === 0) {
      dispatch({
        type: FETCH_REQUESTED
      });
    }
  }, []);

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
