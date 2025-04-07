import React from 'react';
import Nav from './Components/NavBer/Nav';
import { Outlet } from 'react-router-dom';
import StoreContextProvider from './Contexts/StoreContextProvider';

const App = () => {
  return (
    <StoreContextProvider>
      <Nav></Nav>
      <Outlet></Outlet>
    </StoreContextProvider>
  );
};

export default App;