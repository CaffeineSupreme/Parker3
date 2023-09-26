import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

function Home() {
    const date = moment().format("MMM Do YY");
    useEffect(() => {
        console.log(localStorage.getItem("name"))
    }, [])
  return (
    <div>
      <header>
        Welcome to Parker {JSON.parse(localStorage.getItem("name"))}!
      </header>
      <p>Date: {date}</p>
      <img src="/Parkerlogo.png" alt="Parker Logo" />
    </div>
  );
}

export default Home;
