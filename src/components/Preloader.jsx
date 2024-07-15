

import React from 'react';




const Preloader = () => {

  
  const logo ="https://i.pinimg.com/originals/24/bd/b9/24bdb963b911fc0e2768bffe888ab175.gif"
  return (
    <div className="preloader">
      <div className="spinner">
        <a href=""><img className="preloaderImg navLogo" src={logo} alt="logo" /></a> 
      </div>
    </div>
  );
};


export default Preloader;
