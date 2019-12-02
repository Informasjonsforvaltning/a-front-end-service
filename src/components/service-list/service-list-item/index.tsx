import React from 'react';
import { Version } from '../../../types';

export interface Props {
  version: Version;
}

export const ServiceListItem = ({ version: { name, version } }: Props) => (
  <li>
    running version for {name} is{version}
  </li>
);
