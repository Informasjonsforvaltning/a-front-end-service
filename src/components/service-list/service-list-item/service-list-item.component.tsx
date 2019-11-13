import * as React from "react";
import { type } from "os";

export type VersionProps = { name: string; version: string}

export const ServiceListItem = (props: VersionProps) => <li>running version for {props.name} is {props.version}</li>