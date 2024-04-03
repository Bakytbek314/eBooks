import { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header/Header';
import ComRoutes from './pages/routes/Routes';
import Footer from './components/Footer/Footer';

function App() {

  // const [state, setState] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:3001/popular");
  //     const data = await res.json()
  //     setState(data)
  //   }
  //   fetchData()
  // }, []);

  // console.log(state);

  return (
    <div className="App">
      <Header/>
      <ComRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
