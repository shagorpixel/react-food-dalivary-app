import React from 'react';
import Nav from './Components/NavBer/Nav';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
};

export default App;