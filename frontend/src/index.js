import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "./components/ui/provider";
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "./components/ui/toaster";
import { ChatProvider } from './Context/ChatProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChatProvider>
    <BrowserRouter>
      <Provider>
        <Toaster />
        <App />
      </Provider>
    </BrowserRouter>
  </ChatProvider>
);