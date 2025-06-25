import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react'
import Home from './Pages/Home';
import Produce from './Pages/Produce';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Single_produce from './Pages/Single_produce';
import Checkout from './Pages/Checkout';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';


const App = () => {
  return (
  
  // <div>
  //   <Home/>
  // </div>
  <div> 
    <Router>
      {/* <div className="p-4 space-x-4 bg-gray-100 text-center">
        <Link to="/" className="text-blue-600 underline">Home</Link>
        <Link to="/about" className="text-blue-600 underline">About</Link>
        <Link to="/contact" className="text-blue-600 underline">Contact</Link>
      </div> */}

      <Routes>
        {/* navbar links */}
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/produce" element={<Produce />} />

        {/* product links */}
        <Route path="/single_produce" element={<Single_produce />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* signup and signin links */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  </div>

  
  
  )
}

export default App