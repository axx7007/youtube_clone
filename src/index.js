import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root'
import SideProvider from './context/activecontext'
 import KinoContext from './context/datacontext'
ReactDOM.render(
  <React.StrictMode>
      <KinoContext>
    <SideProvider>
        <Root />
    </SideProvider>
      </KinoContext>
  </React.StrictMode>,
  document.getElementById('root')
);

