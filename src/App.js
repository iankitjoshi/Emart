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
// import UpdateDeleteProduct from './component/Product/UpdateProduct';
import ProductEdit from './component/Product/EditProduct';
import ProductNew from './component/Product/NewProduct';
import ShowProduct from './component/Product/ProductShow'
import ProductList from './component/Product/ProductList';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={FullHome}  exact={true} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          {/* <Route path="/add" component={AddProduct} />
          <Route path="/update" component={UpdateDeleteProduct} /> */}

        
        {    
          localStorage.getItem('Authorization') ? (
              <div>
                <Route path="/products"  component={ProductList} exact={true } />
                <Route path="/products/new" component={ProductNew} exact={true }/>
                <Route path="/products/edit/:id" component={ProductEdit} />
                <Route path="/product/:id" component={ShowProduct} />
                <Route path="/products/:id" component={ProductShow} exact={true}/>

                {/* <Route path="/products/:id" component={ProductEdit}/> */}
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
