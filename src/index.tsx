import React from 'react';
import { render } from 'react-dom';
import { ServiceList } from './components/service-list/service.list.component';

render(<ServiceList />, document.getElementById('root'));

if ((module as any).hot) {
  (module as any).hot.accept();
}
