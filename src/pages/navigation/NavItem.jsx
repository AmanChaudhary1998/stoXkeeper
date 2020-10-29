import {React, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.styles.css';
function NavItem(props) {
  const [open, setOpen] = useState(false);
  
    return (
      <>
      <li className="nav-item">
          <a href="#" className="icon-button" onClick={() => setOpen(!open)} >
        {props.icon}
            </a>

        {open && props.children}
      </li>
      </>
    );
}
export default NavItem;