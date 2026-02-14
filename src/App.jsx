import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Product from './components/Product.jsx';
import BarCode from './components/BarCode.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          {/* <Route path="/scanbarcode" element={<BarCode />} /> */}
        </Route>
        <Route path="/products" element={<Product />}>
        
        </Route>
        <Route path="/scanbarcode" element={<BarCode />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
