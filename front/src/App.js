import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import history from './services/history'
import Routes from './routes'
import Layout from './Layout'
import GlobalStyle from './styles/global';
import { store } from './store';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <Routes />
        </Layout>
        <GlobalStyle />
        <ToastContainer
            autoClose={3000}
            position={toast.POSITION.TOP_CENTER}
          />
      </Router>
    </Provider>
  );
}

export default App;
