import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import FullHome from './component/Home/FullHome';
import About from './component/About/About';
import Shop from './component/Shop/Shop';
import Cart from './component/Cart/cart';
import LModal from './component/Home/LModal';
import ProductShow from './component/Shop/productShow'
import Login from './component/Home/Login';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Route path="/" component={FullHome}  exact={true} />
        <Route path="/login" component={LModal} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
        {    
          localStorage.getItem('Authorization') ? (
              <div>
                <Route path="/products/:id" component={ProductShow} />
              </div>
          ) : (
              <div>
                  
                  <Login/>
                  
              </div>
          )
         }
         

      </BrowserRouter>
    </div>
  );
}

export default App;
