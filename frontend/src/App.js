import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import{Routes} from 'react-router-dom';
import Home from "./components/Home";
import Events from "./components/Events";
import Create from "./components/Create";


function App() {
  return (
    <Router>

        <Navbar />
  <Routes>
      <Route path="/" element={<Home />} >
          
          
        </Route> 
  
        <Route path="/events" element={<Events /> }> 
          
        </Route> 
  
        <Route path="/create" element={<Create />}>
          
        </Route> 
  </Routes>


    </Router>

  )
  
  
}

export default App;
