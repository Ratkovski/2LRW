import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';

import { selectMenuRequest } from '~/store/modules/NavDashboard/actions';

import { Container } from './styles';

const Nav = () => {
  const dispatch = useDispatch();

  const handleDispatch = useCallback((button) => {
    console.log(button);
    dispatch(selectMenuRequest(button));
  },[]);

  return (
    <Container>
       <ul>
          <li>
            <button type="button">
              Saúde financeira
            </button>
            <ul>
              <li>
                <button onClick={() => handleDispatch(1)}>Lucros e despesas</button>
              </li>
              <li />
            </ul>
          </li>
        </ul>
    </Container>
  );
}

export default Nav;
