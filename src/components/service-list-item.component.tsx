import * as React from "react";

export interface ServiceProps { name: string; version: string}

export const Service = (props: ServiceProps) => <li>running version for {props.name} is {props.version}</li>