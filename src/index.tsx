import * as React from "react";
import * as ReactDom from "react-dom";

import { ServiceList } from "./components/service-list/service.list.component";
const placeholder = [{name: "hjkk", version: "156371537"},{name: "vjsklgsdg", version: "567657657"}]
ReactDom.render( <ServiceList/>, 
                    document.getElementById('container'));