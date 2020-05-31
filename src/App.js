import React from 'react';
import { BrowserRouter, Route ,Switch  } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'

import FullHome from './component/Home/FullHome';
import About from './component/About/About';
import Shop from './component/Shop/Shop';
import Cart from './component/Cart/cart';
import ProductShow from './component/Shop/productShow'
import LoginFirst from './component/Home/LoginFirst';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={FullHome}  exact={true} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
       
        
        {    
          localStorage.getItem('Authorization') ? (
              <div>
                <Route path="/products/:id" component={ProductShow} />
                {/* {window.location.reload()} */}
              </div>
          ) : (
              <div>
                  <LoginFirst />
                 
              </div>
          )
         }
         
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
