import React from 'react';
import { Container } from './styles';

const Nav = () => {

  return (
    <Container>
       <ul>
          <li>
            <button type="button">
              Saúde financeira
            </button>
            <ul>
              <li>
                <button>Lucros e despesas</button>
              </li>
              <li />
            </ul>
          </li>
        </ul>
    </Container>
  );
}

export default Nav;
