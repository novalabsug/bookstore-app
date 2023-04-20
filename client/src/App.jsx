import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './Themes/Global.style.css';
import MainNavbar from './components/Navs/MainNavbar.jsx';
import Signin from './pages/Signin';
import ProtectedRoute from './middleware/ProtectedRoute';
import Footer from './components/Footers/Footer';
import Signup from './pages/Signup';
import Browse from './pages/Browse';
import Cart from './pages/Cart';
import Search from './pages/Search';
import Bookdetails from './pages/Bookdetails';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Order from './pages/Order';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/bookdetails" element={<Bookdetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order" element={<Order />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
