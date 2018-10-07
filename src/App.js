import React from 'react';
import { Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
import SideNavMenu from './components/Side-nav-menu.js';
import { BrowserRouter as Router } from 'react-router-dom';

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

onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
}

onToggleSideNav(){
  this.setState({
    toggleSideNav: !this.state.toggleSideNav
  });
}

render() {
  const bgDarkBlue = {backgroundColor: '#243a51'}
  const container = {height: 1300}
    return(
      <div>
        <Router>
        <Navbar style={bgDarkBlue} dark expand="md" scrolling fixed="top">
        <a href="#" data-activates="slide-out" className="button-collapse-left-menu" onClick={this.onToggleSideNav}>
          <i className="fa fa-bars fa-lg"></i>
        </a>
          <NavbarBrand href="/">
              <strong>Gravitsapa</strong>
          </NavbarBrand>
          <NavbarToggler onClick={ this.onClick } />
          <Collapse isOpen = { this.state.collapse } navbar>
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
        </Router>

        {this.state.toggleSideNav ? <SideNavMenu/> : null}
        {this.state.toggleSideNav ? <div className="sidenav-overlay" onClick={this.onToggleSideNav}></div> : null}
        <Container style={container} className="text-center mt-5">
          <h2>This Navbar is fixed</h2>
          <h5>It will always stay visible on the top, even when you scroll do </h5>
          <br/>
          <p>Full page intro with background image will be always displayfull screen mode, regardless of device </p>
        </Container>
      </div>
    );
  }
}

export default FixedNavbarExample;