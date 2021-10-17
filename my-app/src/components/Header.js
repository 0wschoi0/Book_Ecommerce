import React from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Refurbished Books</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
              className="me-auto"
              style={{ maxHeight: '100px' }}
              >
                <NavDropdown title="Category" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action3">Something else here</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Search
                </Nav.Link>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Nav>
              <Nav>
                <LinkContainer to='/cart'>
                  <Nav.Link><i className="fas fa-shopping-cart"></i> CART</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                <Nav.Link><i className="fas fa-user"></i> LOGIN</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
}

export default Header
