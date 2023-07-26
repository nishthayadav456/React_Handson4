import React from 'react';
import './App.css';
import RouteCompo from "./RouteCompo";
import { BrowserRouter } from 'react-router-dom';
import LinkCompo from './LinkCompo';


function App() {
  return (
    <>
    <BrowserRouter>
    <LinkCompo/>
    <RouteCompo/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
