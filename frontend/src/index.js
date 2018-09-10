import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Presupuesto from './containers/Presupuesto';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import {createStore} from 'redux'

import reducers from "./reducers";

import './habitissimo.css';

ReactDOM.render(
 <Provider store={createStore(reducers)}>
  <Presupuesto />
 </Provider>,
 document.getElementById('root')
);
registerServiceWorker();
