import React from 'react';
import Wrapper from './Wrapper/DashBoardNavbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo.js';
import { useAppContext } from '../context/appContext';
import { useState } from 'react';

const DashboardNavbar = () => {
  const { toggleSideBar, logoutUser, user } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="dashboardbtn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            &nbsp;
            {user?.name}
            &nbsp;
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type="button" className="dropdown-btn" onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DashboardNavbar;
