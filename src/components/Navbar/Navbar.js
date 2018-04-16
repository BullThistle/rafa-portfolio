import React from 'react';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <Menu.Item header href="/">
      Boilerplate
    </Menu.Item>
    <Menu.Item href="/about">About</Menu.Item>
  </Menu>
);

export default Navbar;
