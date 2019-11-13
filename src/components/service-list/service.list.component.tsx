import * as React from "react"
import { VersionProps, ServiceListItem } from "./service-list-item/service-list-item.component"
const placeholder = [{name: "hajjlskfjlaksfkk", version: "156371537"},{name: "vjsklgsdg", version: "567657657"}]


export const ServiceList = () => 
<ul> { placeholder.map((value,index) => {return <ServiceListItem key={index} name={value.name} version={value.version}/>; }) }</ul>
