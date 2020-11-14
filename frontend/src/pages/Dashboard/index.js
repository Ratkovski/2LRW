import React from 'react';

import history from '~/services/history';

import { Container, Content } from './styles';

import Nav from '~/components/Nav';

export default function Dashboard() {

  return (
    <>
      <Nav/>
      <Container>
        <Content/>
      </Container>
    </>
  );
}
