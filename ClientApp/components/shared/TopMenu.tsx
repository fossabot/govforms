import React, { useState } from "react";
import { withRouter } from "react-router";
import { Redirect, NavLink } from "react-router-dom";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import SessionManager from "@Core/session";

const TopMenu: React.FC = () => {

    return <Navbar bg="light" expand="lg">
        <LinkContainer exact to={'/'}>
            <Navbar.Brand>RCB.TypeScript</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer exact to={'/'}>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                
            </Nav>

            <Nav>
                <Dropdown alignRight>
                    Blah
                </Dropdown>
            </Nav>

        </Navbar.Collapse>
    </Navbar>;
}

// Attach the React Router to the component to have an opportunity
// to interract with it: use some navigation components, 
// have an access to React Router fields in the component's props, etc.
export default withRouter(TopMenu);