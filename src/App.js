import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </Suspense>
    </>
  );
}

export default App;
