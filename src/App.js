import React from 'react';
import { BrowserRouter  } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


import Emart from './component/Emart'
import Menu from './component/MenuBar';
import Slider from './component/Slider';
import Shipping from './component/Shipping';
import LModal from './component/LModal';
import RModal from './component/RModal';
import Collection from './component/Collection';
import Featured from './component/Featured'

function App() {
  return (
    <div>
      <BrowserRouter>

        {/* <Link to="/">Home </Link>
        <Link to="/contact">Contact</Link> */}

        <Emart />
        <Menu />
        <Slider />
        <Shipping />
        {/* <LModal />
        <RModal /> */}
        <Collection />

        <Featured />

      </BrowserRouter>
    </div>
  );
}

export default App;
