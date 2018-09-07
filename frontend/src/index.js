import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Presupuesto from './components/Presupuesto';
import registerServiceWorker from './registerServiceWorker';

import './habitissimo.css';

ReactDOM.render(<Presupuesto />, document.getElementById('root'));
registerServiceWorker();
