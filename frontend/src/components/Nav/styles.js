import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  width: 18%;
  min-width: 200px;
  margin-top: -60px;
  height: 100%;
  position: absolute;

  ul {
    width: 100%;
    min-width: 200px;
  }

  ul li {
    position: relative;
  }

  ul li a {
    color: #f4ede8;
    display: block;
    padding: 12px 38px;
    text-decoration: none;
  }

  ul li a:hover {
    background: #0f1324;
  }

  ul li button {
    display: flex;
    width: 100%;
    padding: 12px 38px;
    text-decoration: none;
    background: none;
    border: none;
    color: #495EA4;
    font-size: 18px;
  }

  ul li button:hover {
    background: #314295;
    color: #fff;
  }

  ul li ul {
    position: absolute;
    border: none;
    top: 0;
    left: 100%;
    background-color: #fff;
    display: none;
  }

  ul li:hover ul,
  ul li.over ul {
    display: block;
  }

  ul li ul li {
    display: block;
  }
`;
