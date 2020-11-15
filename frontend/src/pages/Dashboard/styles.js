import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 60px;
  margin-top: -60px;
  /* display: flex; */
  /* flex-direction: column; */

  button {
    float: right;
    margin-right: 30px;
    margin-top: 30px;
  }
`;

export const Content = styled.div`
  background: #fff;
  margin-left: 20%;
`;

export const Select = styled.div`
    width: 20%;
    float: right;
    margin-right:2%;
    margin-top: 30px;

  .selectBox {
      position: relative;
  }

  .selectBox select {
      width: 100%;
      font-weight: bold;
  }

  .overSelect {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
  }

  #checkBoxes {
     ${props => props.click ? 'display: block' : 'display: none'}
      position: absolute;
      width: 100%;
      height: 100%;

      font-size: 16px;
      border: none;
      background: #314295;
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
  }

  #checkBoxes label {
      display: block;
  }
/*
  #checkBoxes label:hover {
      background-color: #314295;
  } */

  span {
    color: #314295;
    font-size: 16px;
  }

  select {
    width: 100%;
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
