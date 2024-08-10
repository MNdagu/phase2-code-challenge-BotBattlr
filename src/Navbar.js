import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <>
        <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Bot Collection
      </NavLink>
      <NavLink
        to="/yourbotarmy"
        className="nav-link"
      >
        Your Army Collection
      </NavLink>
      </nav>
        </>
     );
}
 
export default Navbar;