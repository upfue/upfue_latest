import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';

//import images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

//Import Icons
import FeatherIcon from 'feather-icons-react';
import RightSidebar from '../../../src/components/Layout/RightSidebar';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      open: false,
      position: 'right',
    };
    this.toggleRightDrawer = this.toggleRightDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
  }
  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps) {
    if (this.props.type !== prevProps.type) {
      this.initMenu();
    }
  }

  toggleRightDrawer = () => {
    this.setState({ position: 'right' });
    this.setState({ open: !this.state.open });
  };
  onDrawerClose = () => {
    this.setState({ open: false });
  };

  initMenu() {
    this.activateMenu();
  }

  activateMenu() {
    var menuItems = document.getElementsByClassName('sub-menu-item');
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add('active');
        const immediateParent = matchingMenuItem.closest('li');
        if (immediateParent) {
          immediateParent.classList.add('active');
        }
        const parent = matchingMenuItem.closest('.parent-menu-item');
        if (parent) {
          parent.classList.add('active');
          var parentMenuitem = parent.querySelector('.menu-item');
          if (parentMenuitem) {
            parentMenuitem.classList.add('active');
          }
          const parentOfParent = parent.closest('.parent-menu-item-sub');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        } else {
          const parentOfParent = matchingMenuItem.closest(
            '.parent-menu-item-sub',
          );
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        }
      }
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.initMenu();
    document.body.classList = '';
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  UNSAFE_componentWillMount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.querySelector('.settingbtn').classList.remove('btn-light');
      document.querySelector('.settingbtn').classList.add('btn-soft-primary');
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.querySelector('.settingbtn').classList.remove('btn-soft-primary');
      document.querySelector('.settingbtn').classList.add('btn-light');
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };

  /**
   * Toogle menu in mobile screen
   */
  isToogleMenu = () => {
    const isToggle = document.getElementById('isToggle');
    if (isToggle) {
      isToggle.classList.toggle('open');
      var isOpen = document.getElementById('navigation');
      console.log('navgiationId', isOpen);
      if (isOpen.style.display === 'block') {
        isOpen.style.display = 'none';
      } else {
        isOpen.style.display = 'block';
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <div className="container">
            <div>
              <Link className="logo" to="/">
                <span className="logo-light-mode">
                  <img src={logoDark} className="l-dark" height="56" alt="" />
                  <img src={logoLight} className="l-light" height="56" alt="" />
                </span>
                <img
                  src={logoLight}
                  height="56"
                  className="logo-dark-mode"
                  alt=""
                />
              </Link>
            </div>

            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  to="#"
                  className="navbar-toggle"
                  id="isToggle"
                  onClick={this.isToogleMenu}
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>

            <ul className="buy-button list-inline mb-0">
              <li className="list-inline-item mb-0">
                <Link
                  to="#"
                  onClick={this.toggleRightDrawer}
                  disabled={this.state.open}
                >
                  <div className="login-btn-primary">
                    <span className="btn btn-icon btn-pills btn-soft-primary settingbtn">
                      <FeatherIcon icon="phone-call" className="fea icon-sm" />
                    </span>
                  </div>
                </Link>
                <Link
                  to="#"
                  onClick={this.toggleRightDrawer}
                  disabled={this.state.open}
                >
                  <div className="login-btn-light">
                    <span className="btn btn-icon btn-pills btn-light shoppingbtn">
                      <FeatherIcon icon="phone-call" className="fea icon-sm" />
                    </span>
                  </div>
                </Link>
              </li>{' '}
            </ul>

            <div id="navigation">
              <ul className="navigation-menu nav-light">
                <li className="has-submenu parent-menu-item-sub">
                  <Link to="#">Gov Grant</Link>
                  <span className="menu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <Link to="/gov-grant-psg" className="sub-menu-item">
                        {' '}
                        PSG Grant
                      </Link>
                    </li>
                    <li>
                      <Link to="/gov-grant-edg" className="sub-menu-item">
                        EDG Grant
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/services" className="sub-menu-item">
                    Services
                  </Link>
                </li>
                <li className="has-submenu parent-menu-item-sub">
                  <Link to="#"> About Us</Link>
                  <span className="menu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <Link to="/about" className="sub-menu-item">
                        {' '}
                        About us{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to="/team" className="sub-menu-item">
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link to="/job" className="sub-menu-item">
                        Job positions
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" className="sub-menu-item">
                        faqs
                      </Link>
                    </li>
                    <li>
                      <Link to="/gallery" className="sub-menu-item">
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contactus" className="sub-menu-item">
                    Contact us
                  </Link>
                </li>
                <li className="has-submenu parent-menu-item-sub">
                  <Link to="#">Latest Blogs</Link>
                  <span className="menu-arrow"></span>
                  <ul className="submenu">
                    <li>
                      <Link to="/blogs" className="sub-menu-item">
                        Latest Blogs
                      </Link>
                    </li>
                    <li>
                      <Link to="/news" className="sub-menu-item">
                        Latest News
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <ReactDrawer
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}
        >
          <RightSidebar onClose={this.onDrawerClose} />
        </ReactDrawer>
      </React.Fragment>
    );
  }
}

export default NavBar;
