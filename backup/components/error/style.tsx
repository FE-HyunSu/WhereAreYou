import styled, { keyframes } from 'styled-components';

const loadingMotion = keyframes`
  0%{transform:rotate(0deg);}
  100%{transform:rotate(360deg);}
`;

export const ErrorBoxUI = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
  z-index: 11;
  &:before {
    content: '';
    position: absolute;
    top: calc(50% - 4rem);
    right: 0;
    left: 0;
    width: 3rem;
    height: 3rem;
    margin: auto;
    border-top: 0.1rem solid #fff;
    border-right: 0.1rem solid #fff;
    border-radius: 100%;
    animation: ${loadingMotion} 1s linear infinite;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1.6rem;
    strong {
      display: block;
      position: relative;
      width: 4rem;
      height: 4rem;
      margin: -2rem auto 1rem;
      text-indent: -9999rem;
    }
    p {
      font-weight: 300;
      line-height: 1.2;
      text-align: center;
      color: #fff;
      button {
        display: block;
        margin: 1rem auto;
        font-weight: 300;
        line-height: 1.2;
        text-align: center;
        color: #fff;
      }
    }
  }
`;
