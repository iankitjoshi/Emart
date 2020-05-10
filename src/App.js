import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import FullHome from './component/Home/FullHome';
import About from './component/About/About';
import Shop from './component/Shop/Shop';
import Cart from './component/Cart/cart';


function App() {
  return (
    <div>
      <BrowserRouter>

        <Route path="/" component={FullHome}  exact={true} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />

      </BrowserRouter>
    </div>
  );
}

export default App;
