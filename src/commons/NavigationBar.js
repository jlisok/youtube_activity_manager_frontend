import React, {useState} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import {handleAuthentication} from "../authentication/handleAuthentication";
import {LocalStorageItemNames} from "./LocalStorageItemNames";

export let NavigationBar = () => {

    let [ifAuthenticated, setIfAuthenticated] = useState(localStorage.getItem(LocalStorageItemNames.AUTHENTICATED));

    let handleLogOut = () => {
        handleAuthentication(null, "false", "false");
        setIfAuthenticated(localStorage.getItem(LocalStorageItemNames.AUTHENTICATED))
    }

    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href={ifAuthenticated === "true" ? "/dashboard" : "/"}>YouTube
                    Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id="Router" className="ml-auto">
                        {ifAuthenticated === "true" ?
                            <Nav.Item className="RouterNavItem">
                                <Nav.Link id="RouterNavLink" href="/dashboard">Dashboard</Nav.Link>
                            </Nav.Item> : ""
                        }

                        <Nav.Item id="RouterNavItem">
                            <Nav.Link id="RouterNavLink" href="/about">About</Nav.Link>
                        </Nav.Item>

                        {ifAuthenticated === "false" ?
                            <Nav.Item className="RouterNavItem">
                                <Nav.Link id="RouterNavLink" href="/">Log in</Nav.Link>
                            </Nav.Item>
                            : <Nav.Item className="RouterNavItem">
                                <Nav.Link id="RouterNavLink" href="/"
                                    onClick={handleLogOut}
                                >Log out</Nav.Link>
                            </Nav.Item>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
};

const Styles = styled.div`
  .navbar {
    background-color: #222;
    width: 100%;
    margin: 0px;
    overflow: auto;

  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;
