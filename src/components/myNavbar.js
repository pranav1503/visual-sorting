import React, { Component } from 'react'
import { NavLink,Link } from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap'


export default class myNavbar extends Component {

    render() {
        return (
            <>            
            <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Sorting-Visualization of {this.props.name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <NavLink className="nav-link" activeClassName="active" as={Link} to="/bubble">Bubble</NavLink>
                    <NavLink className="nav-link" activeClassName="active" as={Link} to="/quick">Quick</NavLink>                
                    <NavLink className="nav-link" activeClassName="active" as={Link} to="/insertion">Insertion</NavLink>                
                    <NavLink className="nav-link" activeClassName="active" as={Link} to="/merge">Merge</NavLink>                              
                    {/* <Nav.Link className="nav-link" activeClassName="active" href="bubble">Bubble</Nav.Link>
                    <Nav.Link className="nav-link" activeClassName="active" href="quick">Quick</Nav.Link>                
                    <Nav.Link className="nav-link" activeClassName="active" href="insertion">Insertion</Nav.Link>                
                    <Nav.Link className="nav-link" activeClassName="active" href="merge">Merge</Nav.Link>                               */}
                </Nav>  
            </Navbar.Collapse>
            </Navbar>
            </>
        )
    }
}
