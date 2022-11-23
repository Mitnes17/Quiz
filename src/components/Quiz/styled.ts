import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 12px 50px;
  padding: 12px;
  width: 296px;
  height: 250px;
  border-radius: 15px;
  color: black;
  background-color: aliceblue;
  z-index: 0;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    height: 50px;
    border-radius: 15px;
    z-index: -1;
  }

  &::after {
    width: 95%;
    bottom: -3%;
    background-color: rgba(240, 248, 255, 0.8);
  }

  &::before {
    width: 90%;
    bottom: -6%;
    background-color: rgba(240, 248, 255, 0.6);
  }

  @media (min-width: 768px) {
    width: 500px;
    height: 350px;
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 7px;
  margin-top: 10px;
  background: linear-gradient(90deg, #ff006e 0%, rgba(0, 212, 255, 1) 100%);
  border-radius: 30px;
  transition: 0.3s;

  &::after {
    content: '';
    position: absolute;
    width: 296px;
    height: 7px;
    border-radius: 30px;
    background-color: lightgray;
    z-index: -1;

    @media (min-width: 768px) {
      width: 500px;
    }
  }
`;

export const H2 = styled.h2`
  text-align: center;
  padding: 12px 0px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 12px 50px;
  padding: 12px;
  width: 296px;
  height: 250px;
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
    width: 120px;
    height: auto;
  }

  @media (min-width: 768px) {
    justify-content: space-evenly;
    width: 500px;
    height: 350px;

    img {
      width: 180px;
      height: auto;
    }
  }
`;

export const Congratulations = styled.div`
  font-size: 20px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const Link = styled.a`
  padding: 6px 10px;
  text-decoration: none;
  color: aliceblue;
  font-size: 18px;
  border-radius: 15px;
  background: linear-gradient(to right, #5545d6, #7f228c, #908df5, #e43d3c);
  box-shadow: 0 4px 15px 0 rgba(123, 45, 160, 0.75);

  &:hover {
    background: linear-gradient(to right, #5a70d4, #834fb9, #5a80d2, #892ad8);
    box-shadow: 0 4px 15px 0 rgba(136, 92, 197, 0.75);
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    font-size: 22px;
    padding: 6px 14px;
  }
`;
