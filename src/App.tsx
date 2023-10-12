import React from 'react';
import Routes from './app/routes/Routes';

import './App.css';

function App() {
  return (
    <div className="bg-primary w-screen h-screen">
    <Routes />
    <Input
      required
      id="email"
      label="Email address"
      type="email"
      placeholder={"example@gmail.com"}
    />
  </div>
  );
}

export default App;
