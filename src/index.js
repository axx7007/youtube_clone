import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root'
import SideProvider from './context'
 
ReactDOM.render(
  <React.StrictMode>
    <SideProvider>
    <Root />
    </SideProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

