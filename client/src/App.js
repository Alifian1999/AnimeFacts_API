import './App.css';
import {
  BrowserRouter as Provider,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from './pages/LandingPage';
import AnimeDescription from './pages/AnimeDescription';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState([])
  const [animeName, setAnimeName] = useState('')
  return (
    <div style={{width:'100%'}}>
      <Provider>
        <Routes>
          <Route path='/' element={<LandingPage setValue={setValue} setAnimeName={setAnimeName}/>} />
          <Route path='anime-description/' element={<AnimeDescription value={value} animeName={animeName} />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
