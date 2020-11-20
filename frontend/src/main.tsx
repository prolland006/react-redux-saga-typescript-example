import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  EarthResourceContainer,
  LooserContainer,
} from './components';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <>
    <h1>Stupid humans</h1>
    <table>
      <td><LooserContainer /></td>
      <td>
        <EarthResourceContainer />
      </td>
    </table>
    </>
  </Provider>,
  document.getElementById('root')
);
