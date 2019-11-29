import React from 'react';
import { ServiceListItem } from './service-list-item';

const placeholder = [{ name: 'hajjlskfjlaksfkk', version: '156371537' }];

export const ServiceList = () => (
  <ul>
    {placeholder.map((value, index) => (
      <ServiceListItem key={index} version={value} />
    ))}
  </ul>
);
