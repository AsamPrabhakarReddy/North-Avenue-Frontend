import React from 'react';
import Navbar from './components/Navbar';
import LoginPage from './components/login';
import Home from './components/Home';
import Owner from './components/Owner';
import Salesman from './components/Salesman';
import Manager from './components/Manager';
import InvertaryClerk from './components/InventaryClerk';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/owner" element={<Owner />} />
          <Route path="/salesman" element={<Salesman />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/inventory-clerk" element={<InvertaryClerk />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
