import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
//TODO: icon change on login / logout
export const NavigationBar = () => (
    <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">YouTube Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id="Router" className="ml-auto">
                        <Nav.Item className="RouterNavItem">
                            <Nav.Link id="RouterNavLink" href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item id="RouterNavItem">
                            <Nav.Link id="RouterNavLink" href="/about">About</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    </Styles>

);

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;
