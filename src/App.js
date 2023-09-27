import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import Login from './pages/Login';
import Cse from './pages/Cse';
import Ece from './pages/Ece';
import Eee from './pages/Eee';
import It from './pages/It';
import Aiml from './pages/Aiml';
import SignUp from './pages/Signup';

function App(){
  return(
    <BrowserRouter>
       <Routes>
       <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='cse' element={<Cse />} />
        <Route path='ece' element={<Ece />} />
        <Route path='eee' element={<Eee />} />
        <Route path='it' element={<It />} />
        <Route path='aiml' element={<Aiml />} />
        <Route path='*' element={<Error />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;