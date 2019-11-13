import * as React from "react";
import * as ReactDom from "react-dom";

import {Service} from './components/service-list-item.component'

ReactDom.render( <Service name="Tadda!" version="1.9.1"/>, 
                    document.getElementById('container'));