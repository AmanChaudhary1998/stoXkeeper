import React from 'react';

import './App.css';
import Navbar from './pages/navigation/Navbar';
import NavItem from './pages/navigation/NavItem';

import { ReactComponent as CaretIcon } from './icons/caret.svg';
import DropdownMenu from './pages/navigation/DropdownMenu';

function App() {
  return (
    <>
    <Navbar>
      <NavItem  />
      <NavItem  />
      <NavItem  />
      <NavItem icon={< CaretIcon />}>

        <DropdownMenu />

      </NavItem>
    </Navbar>
    </>
  );
}

export default App;
