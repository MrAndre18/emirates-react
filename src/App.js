import React, { useState } from 'react';
import '../src/assets/styles/App.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/Header/Header';
import { HeaderMenuStateContext } from './context/context';

const App = () => {
  const [headerMenuIsOpen, setHeaderMenuIsOpen] = useState(false)

  return (
    <div className="app">
      <BrowserRouter>
        <HeaderMenuStateContext.Provider
          value={{ headerMenuIsOpen, setHeaderMenuIsOpen }}
        >
          <Header />
          <AppRouter />
        </HeaderMenuStateContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
