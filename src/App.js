import React from 'react';
import { Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
import SideNavMenu from './components/SideNavMenu.js';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import League from './pages/League';
import NoMatch from './pages/NoMatch';

class FixedNavbarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      toggleSideNav: false
    };
    this.onClick = this.onClick.bind(this);
    this.onToggleSideNav = this.onToggleSideNav.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  onToggleSideNav() {
    this.setState({
      toggleSideNav: !this.state.toggleSideNav
    });
  }

  render() {
    const bgDarkBlue = { backgroundColor: '#243a51' }
    return (
      <div>
        <Router>
          <React.Fragment>
            <Navbar style={bgDarkBlue} dark expand="md" scrolling fixed="top">
              <a href="#" data-activates="slide-out" className="button-collapse-left-menu" onClick={this.onToggleSideNav}>
                <i className="fa fa-bars fa-lg"></i>
              </a>
              <NavbarBrand href="/">
                <strong>Gravitsapa</strong>
              </NavbarBrand>
              <NavbarToggler onClick={this.onClick} />
              <Collapse isOpen={this.state.collapse} navbar>
                <NavbarNav left>
                  <NavItem active>
                    <NavLink to="#">Events</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#">Closed events</NavLink>
                  </NavItem>
                </NavbarNav>
                <NavbarNav right>
                  <NavItem>
                    <NavLink to="#"><Fa icon="facebook" /></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#"><Fa icon="twitter" /></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#"><Fa icon="instagram" /></NavLink>
                  </NavItem>
                </NavbarNav>
              </Collapse>
            </Navbar>
            {this.state.toggleSideNav ? <SideNavMenu /> : null}

            {this.state.toggleSideNav ? <div className="sidenav-overlay" onClick={this.onToggleSideNav}></div> : null}
            
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/league/:id" component={League} />
              <Route path="/event/:id" component={Event} />
              {/* <Route component={NoMatch}/> */}
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default FixedNavbarExample;