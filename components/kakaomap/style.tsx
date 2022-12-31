import styled, { keyframes } from 'styled-components';

const MotionBounce = keyframes`
  0%{transform: translateY(0);}
  100%{transform: translateY(-1rem);}
`;

export const MapUI = styled.div`
  display: block;
  position: relative;
  height: 100vh;
  z-index: 10;
`;

export const MarckerItem = styled.div`
  display: block;
  position: absolute;
  top: calc(50% - 1.5rem);
  left: calc(50% - 1.5rem);
  display: block;
  width: 3rem;
  height: 3rem;
  text-indent: -999rem;
  animation: ${MotionBounce} 1s alternate infinite;
  z-index: 3;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 4rem;
    height: 6rem;
    background: url(images/img_here.png) no-repeat 50% 50% / 100% auto;
    z-index: 2;
  }
`;

export const BtnShare = styled.button`
  display: block;
  position: absolute;
  top: 75%;
  right: 0;
  left: 0;
  width: 25rem;
  margin: auto;
  padding: 2rem 0;
  background-color: #e8d747;
  border-radius: 10rem;
  color: #3a3a3a;
  font-size: 1.4rem;
  font-weight: 500;
  z-index: 10;
`;
