import React from 'react';
import { BrowserRouter , Link , Route } from 'react-router-dom'
import Home from './component/Home'
import Contact from './component/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <h2>Teach Project</h2>

        <Link to="/">Home </Link>
        <Link to="/contact">Contact</Link>

        <Route path="/" component={Home} exact={true} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
