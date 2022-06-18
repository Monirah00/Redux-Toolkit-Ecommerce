import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut';
function App() {
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Cart' element={<Cart />} />
        <Route exact path='/CheckOut' element={<CheckOut />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
