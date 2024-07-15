
// App.js
import React from "react";
import { useState, useEffect } from 'react';









import Preloader from "./components/Preloader.jsx";
import Homepage from "./components/Homepage.jsx";



import "./components/Preloader.css";
import "./components/Homepage.css";



function App() {
 

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or some async operation
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Set this to the desired loading time
  }, []);





  return (
    <>
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <div className="content">
          <Homepage />


        </div>
      )}
    </div>
    
                        

      
    </>
  );
}

export default App;
