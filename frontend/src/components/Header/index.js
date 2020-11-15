import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import logo from '~/Assets/logo.svg';

const Header = () => {

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="logo" />
          </Link>
        </nav>
      </Content>
    </Container>
  );
}

export default Header;
