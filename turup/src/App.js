import logo from './logo.svg';
import './App.css';
import Home from './pages/HomePage';
import Header from './component/Header';
import { Route, Routes } from "react-router-dom";
import { Suspense } from 'react';


function App() {
  return (
    <div className="App">
      <Header />
      <Suspense>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
