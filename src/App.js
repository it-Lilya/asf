import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { TrainSelection } from './components/TrainSelection/TrainSelection';

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/train-selection/*' element={<TrainSelection />} />
      </Routes>
    </div>
  );
}
