import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-evenly;
  flex: 2;
  list-style-type: none;

  li {
    padding: 3px 10px;
    border: 1px solid gray;
    border-radius: 15px;
    font-weight: 500;
    transition: 0.3s;
    cursor: pointer;

    ::first-letter {
      text-transform: uppercase;
    }

    @media (min-width: 768px) {
      padding: 6px 16px;
      font-size: 18px;

      &:hover {
        transition: 0.3s;
        border: 1px solid black;
        background-color: cyan;
      }
    }

    &:active {
      transition: 0.5s;
      border: 1px solid black;
      background-color: cyan;
    }
  }
`;
