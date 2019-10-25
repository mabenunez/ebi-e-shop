import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Route, Link } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
