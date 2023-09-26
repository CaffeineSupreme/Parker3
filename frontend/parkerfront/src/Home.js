import React from 'react';
let moment = require('moment');
function Home() {

    const date = moment().format("MMM Do YY"); 
    console.log(date);
  return (
    <div>
      <header>
        Welcome to Parker!
        
      </header>
      <img src="/Parkerlogo.png" alt="Parker Logo" />
    </div>
  );
}

export default Home;
