import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import { Route } from 'react-router-dom';

const HatsPage = () => {
  return(
    <div>Hats Page</div>
  )
}

function App() {
  return (
    <div>
      <Route path='/' component={Homepage}></Route>
      <Route path='/hats' component={HatsPage}></Route>
    </div>
  );
}

export default App;
