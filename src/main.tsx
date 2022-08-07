import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import CartRedux from './cartRedux/CartRedux'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={CartRedux}>
      <App />
    </Provider>
  </BrowserRouter>
)
