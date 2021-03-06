import React from 'react';
import { ServiceListItem } from './service-list-item';

const placeholder = [
  { name: 'hajjlskfjlaksfkk', version: '156371537' },
  { name: 'vjsklgsdg', version: '567657657' }
];

export const ServiceList = () => (
  <ul>
    {placeholder.map(value => (
      <ServiceListItem key={value.name} version={value} />
    ))}
  </ul>
);
