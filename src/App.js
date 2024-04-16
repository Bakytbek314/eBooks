import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header/Header';
import ComRoutes from './pages/routes/Routes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ComRoutes />
      <Footer />
    </div>
  );
}

export default App;
