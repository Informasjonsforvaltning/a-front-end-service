import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider as ReduxProvider } from 'react-redux';
import { ServiceList } from './components/service-list';
import store from './redux/store';
import { Header } from './components/header';

render(
  <ReduxProvider store={store}>
    <AppContainer>
      <div>
        <Header />
        <ServiceList />
      </div>
    </AppContainer>
  </ReduxProvider>,
  document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept();
}
