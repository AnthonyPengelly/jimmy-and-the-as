import * as React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, NavItem, Nav } from "react-bootstrap";

export class Navigation extends React.Component<{}, {}> {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Jimmy &amp; the As</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/about">
                            <NavItem>
                                About
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/news">
                            <NavItem>
                                News
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/contact">
                            <NavItem>
                                Contact
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        );
    }
}