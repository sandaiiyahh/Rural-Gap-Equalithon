import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar className="py-3 header vw-100" expand="lg">
      <Navbar.Brand href="/">
        <img
          src="https://i.ibb.co/HFBpbMJ/americatalks.jpg"
          width="300"
          height="119"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
