import React from 'react';
import Navbar from './components/Navbar';
import LoginPage from './components/login';
import Home from './components/Home';
import Owner from './components/Owner';
import Salesman from './components/Salesman';
import Manager from './components/Manager';
import InvertaryClerk from './components/InventaryClerk';
import DashboardNavbar from './components/DashboardNavbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarSalesman from './components/navbarSalesMan';
import SalesmanHero from './components/salesmanHero';
function App() {
  return (
    <div>
      <NavbarSalesman/>
      <SalesmanHero/>
      {/* <BrowserRouter>
        <Navbar />
      
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path='/dashboard' element={<DashboardNavbar/>}/>
          <Route path="/inventoryClerkMenu" element={<InvertaryClerk />} />
          <Route path="/managerMenu" element={<Manager />} />
          <Route path="/salesmanMenu" element={<Salesman />} />
          <Route path="/ownerMenu" element={<Owner />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
