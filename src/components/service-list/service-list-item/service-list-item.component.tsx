import * as React from 'react';

export type VersionProps = { name: string; version: string };

export const ServiceListItem = (props: VersionProps) => (
  <li>
  running version for {props.name} is{props.version}
  </li>
);
