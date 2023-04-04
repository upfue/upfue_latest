import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Nav } from 'reactstrap';
import Wrapper from '../../components/Wrapper/SharedLayout';
import { BigSideBar, SmallSidebar, DashboardNavbar } from '../../components';

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSideBar />
        <div>
          <DashboardNavbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
