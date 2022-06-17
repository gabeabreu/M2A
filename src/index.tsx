import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import Router from './routes/Router';
import { Provider } from 'react-redux';
import store from './redux';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout>
        <p>todo</p>
      </Layout>
    </React.StrictMode>
  </Provider>
);
