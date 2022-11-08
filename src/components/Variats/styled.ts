import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
  flex: 2;

  li {
    border: 1px solid gray;
    border-radius: 15px;
    padding: 3px 10px;
    font-weight: 500;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      transition: 0.3s;
      border: 1px solid black;
      background-color: cyan;
    }
  }
`;
