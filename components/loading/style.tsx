import styled, { keyframes } from 'styled-components';

const loadingMotion = keyframes`
  0%{transform:rotate(0deg);}
  100%{transform:rotate(360deg);}
`;

export const LoadingBox = styled.div`
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
  z-index: 10;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 3rem;
    height: 3rem;
    margin: auto;
    border-top: 0.1rem solid #fff;
    border-right: 0.1rem solid #fff;
    border-radius: 100%;
    animation: ${loadingMotion} 1s linear infinite;
  }
`;
