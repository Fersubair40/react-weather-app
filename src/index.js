import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/Pages/App/App';
import "././Components/Pages/App/App.css"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
