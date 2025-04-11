import React, { useState } from 'react';
import Nav from './Components/NavBer/Nav';
import { Outlet } from 'react-router-dom';
import StoreContextProvider from './Contexts/StoreContextProvider';
import Footer from './Components/Footer/Footer';
import SignIn from './Components/SignIn/SignIn';

const App = () => {
  const [isLoginOpen,setIsLoginOpen] = useState(false)
  return (
    <StoreContextProvider>
      {
        isLoginOpen&&<SignIn setIsLoginOpen={setIsLoginOpen}></SignIn>
      }
      
      <Nav  setIsLoginOpen={setIsLoginOpen}></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </StoreContextProvider>
  );
};

export default App;