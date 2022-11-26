
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "draft-js/dist/Draft.css";
// import 'react-pro-sidebar/dist/css/styles.css';

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Store/Store'

import { Auth0ProviderWithHistory } from './Auth/Auth0Provider';
import ApolloWrapper from './GraphQl/client';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <ApolloWrapper>
        <BrowserRouter>
          <Provider store={store} >
            <App />
          </Provider>
        </BrowserRouter>
      </ApolloWrapper>
    </Auth0ProviderWithHistory>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
