import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 12px;
  padding: 12px;
  width: 296px;
  height: 200px;
  background-color: aliceblue;
  color: black;
  border-radius: 15px;
  position: relative;
  z-index: 0;
  &::before,
  &::after {
    content: '';
    display: block;
    height: 50px;
    position: absolute;
    z-index: -1;
    border-radius: 15px;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    background-color: rgba(240, 248, 255, 0.8);
    width: 95%;
    bottom: -3%;
  }

  &::before {
    background-color: rgba(240, 248, 255, 0.6);
    width: 90%;
    bottom: -6%;
  }

  @media (min-width: 768px) {
    width: 500px;
    height: 300px;
  }
`;

export const ProgressBar = styled.div`
  margin-top: 10px;
  width: 100%;
  background: linear-gradient(90deg, #ff006e 0%, rgba(0, 212, 255, 1) 100%);
  border-radius: 30px;
  height: 7px;
  transition: 0.3s;
  position: relative;

  &::after {
    content: '';
    width: 500px;
    height: 7px;
    border-radius: 30px;
    background-color: lightgray;
    position: absolute;
    z-index: -1;
  }
`;

export const H2 = styled.h2`
  text-align: center;
  padding: 12px 0px;
  margin: 0;
`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 12px;
  padding: 12px;
  width: 296px;
  height: 200px;
  row-gap: 10px;
  background-color: aliceblue;
  color: black;
  border-radius: 15px;
  position: relative;
  z-index: 0;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 50px;
    position: absolute;
    z-index: -1;
    border-radius: 15px;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    background-color: rgba(240, 248, 255, 0.8);
    width: 95%;
    bottom: -3%;
  }

  &::before {
    background-color: rgba(240, 248, 255, 0.6);
    width: 90%;
    bottom: -6%;
  }

  img {
    width: 100px;
    height: auto;
  }
`;

export const Congratulations = styled.div`
  font-size: 20px;
  font-style: bold;
`;

export const Link = styled.a`
  text-decoration: none;
  color: aliceblue;
  padding: 6px 10px;
  border-radius: 15px;
  background: linear-gradient(to right, #5545d6, #7f228c, #908df5, #e43d3c);
  box-shadow: 0 4px 15px 0 rgba(123, 45, 160, 0.75);
  transition: 5s linear;

  &:hover {
    transition: 5s linear;
    background: linear-gradient(to right, #5a70d4, #834fb9, #5a80d2, #892ad8);
    box-shadow: 0 4px 15px 0 rgba(136, 92, 197, 0.75);
  }

  &:focus {
    outline: none;
  }
`;
