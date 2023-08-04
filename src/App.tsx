import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import { Container, styled } from '@mui/material';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Tickets from './pages/Tickets';
import Checkout from './pages/Checkout';

const Body = styled(Container)(({ theme }) => ({
  minHeight: '80vh'
}))

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Body>
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/' element={<Tickets />} />
        </Routes>
      </Body>
      <Footer />
    </div>
  );
}

export default App;
