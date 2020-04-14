import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div>
                <Navbar bg='light' expand='lg'>
                    <Navbar.Brand href>React Routing Example</Navbar.Brand>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Link to='/'>
                                <Nav.Link href='/'>Home</Nav.Link>
                            </Link>
                            <Link to='/contact'>
                                <Nav.Link href='/contact'>Contact</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;