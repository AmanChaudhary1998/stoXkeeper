import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as CogIcon } from '../../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../icons/bolt.svg';
import './Navbar.styles.css';

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }
  
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="market">
              Market
            </DropdownItem>
            <DropdownItem
              leftIcon={<CogIcon />}
              rightIcon={<ChevronIcon />}
              goToMenu="settings">
              Settings
            </DropdownItem>
  
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'market'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2>Market</h2>
            </DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}
                goToMenu="bse">
                BSE</DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}
                goToMenu="bse">
                NASDAQ</DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'bse'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2>BSE</h2>
            </DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}>
                <a href="/">
                Select Company
                </a>
                </DropdownItem>
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'settings'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h2>Settings</h2>
            </DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}></DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}></DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}></DropdownItem>
            <DropdownItem leftIcon={<BoltIcon />}></DropdownItem>
          </div>
        </CSSTransition>
  
      </div>
    );
  }
export default DropdownMenu;