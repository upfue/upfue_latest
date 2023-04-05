import React from 'react';
import Wrapper from './Wrapper/SmallSideBar';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/appContext';
import NavLinks from './NavLinks';
import Logo from './Logo';

const SmallSidebar = () => {
  const { showSideBar, toggleSideBar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggleSideBar}>
            <FaTimes />
          </button>
          <header>
            <Logo size={96} />
          </header>
          <NavLinks toggleSideBar={toggleSideBar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
