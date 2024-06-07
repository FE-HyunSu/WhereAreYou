import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return <LoadingBox />;
};
export default Loading;

const loadingMotion = keyframes`
  0%{transform:rotate(0deg);}
  100%{transform:rotate(-360deg);}
`;

const LoadingBox = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  @supports (-webkit-appearance: none) and (stroke-color: transparent) {
    height: -webkit-fill-available;
  }
  z-index: 10;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 5rem;
    height: 5rem;
    margin: auto;
    background: url(images/img_loading.png) 50% 50% / 100% auto;
    border: 0.2rem solid #fff;
    border-radius: 100%;
    animation: ${loadingMotion} 5s linear infinite;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;
