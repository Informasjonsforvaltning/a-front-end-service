import React from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { useDispatch, useSelector } from 'react-redux';
import { ServiceListItem } from './service-list-item';
import { insertTestId, TestIdValues } from '../../../test/utils/unitUtils';
import { FETCH_REQUESTED } from '../../redux/actions/types';
import { ServiceEndpoint } from '../../types';
import { AdminContent } from '../admin-content';

export const ServiceList = () => {
  const { endpointVersions, loggedIn } = useSelector((state: any) => {
    return {
      endpointVersions: state.serviceEndpoints.get('serviceEndpoints').toJS(),
      loggedIn: state.authState.get('loggedIn')
    };
  });
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (endpointVersions.length === 0) {
      dispatch({
        type: FETCH_REQUESTED
      });
    }
  }, []);
  function addServiceClicked() {
    console.log('addServiceClicked');
  }
  const adminContent = <AdminContent onAddServiceClicked={addServiceClicked} />;

  return (
    <div {...insertTestId(TestIdValues.serviceList.component)}>
      {loggedIn && adminContent}
      <Table {...insertTestId(TestIdValues.serviceList.table)}>
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>url</TableCell>
            <TableCell>version</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {endpointVersions.map((value: ServiceEndpoint) => (
            <ServiceListItem key={value.name} version={value} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
