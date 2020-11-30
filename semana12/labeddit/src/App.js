import React from 'react';
import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
