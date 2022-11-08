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
`;

export const ProgressBar = styled.div`
  margin-top: 10px;
  width: 100%;
  background: linear-gradient(90deg, #ff006e 0%, rgba(0, 212, 255, 1) 100%);
  border-radius: 30px;
  height: 7px;
  transition: 0.3s;
`;

export const H2 = styled.h2`
  text-align: center;
  padding: 12px 0px;
  margin: 0;
`;
