import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 60px;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    strong {
      color: #fff;
      font-size: 32px;
      cursor: default;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 15px;
      height: 42px;
      width: 170px;
      border-radius: 4px;
      background-color: #f94d6a;
      border: none;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      transition: 0.2s;

      :hover {
        opacity: 0.9;
      }
    }
  }
`;

export const Content = styled.div`
  background: #fff;
  height: 500px;
  margin-top: -60px;
  margin-left: 250px;
`;
