import React from 'react';
import { Worker } from '@react-pdf-viewer/core';

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
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"></Worker>
    </div>
  );
}

export default App;
