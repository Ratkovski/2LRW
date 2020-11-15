import styled from 'styled-components';

export const Container = styled.div`
  width: 15%;
  float: right;
  margin-right:6%;
  margin-top: 12px;

  span {
    color: #314295;
    font-size: 16px;
  }

  input {
    background: #314295;
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
