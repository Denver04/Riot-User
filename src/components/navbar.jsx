import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const navbar = () => {
  const home_url="http://localhost:3000/";
  return (
    
    <nav className='navbar'>
        <Link to="/" className='navbar-name' >
            Welcome to Riot !
        </Link>
    </nav>
  )
}

export default navbar