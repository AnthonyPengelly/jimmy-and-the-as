import * as React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, NavItem, Nav } from "react-bootstrap";

export class Navigation extends React.Component<{}, {}> {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Link className="brand-link" to="/">
                        <img src="/images/logo.png" alt="Jimmy &amp; the As" />
                    </Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer exact to="/">
                            <NavItem>
                                Home
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/meet-the-band">
                            <NavItem>
                                Meet The Band
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/news">
                            <NavItem>
                                News
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/song-list">
                            <NavItem>
                                Song List
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/gallery">
                            <NavItem>
                                Gallery
                            </NavItem>
                        </LinkContainer>
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