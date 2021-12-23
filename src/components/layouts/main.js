import * as React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './header';
import Footer from './footer';

export default function Main(){
  return (
    <React.Fragment>
      <NavBar>
        <Outlet/>
        <Footer/>
      </NavBar>
    </React.Fragment>
  );
}