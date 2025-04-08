import React from 'react';
import Nav from './Components/NavBer/Nav';
import { Outlet } from 'react-router-dom';
import StoreContextProvider from './Contexts/StoreContextProvider';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <StoreContextProvider>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </StoreContextProvider>
  );
};

export default App;