import styled from 'styled-components';

import background from '~/Assets/background.svg';

export const Container = styled.div`
  height: 150px;
  background: url(${background}) no-repeat;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 25px;

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
