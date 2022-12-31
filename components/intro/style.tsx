import styled from 'styled-components';

export const IntroUI = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2rem);
    z-index: -1;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(images/img_slide_01.png) no-repeat 50% 50% / cover;
    z-index: -2;
  }
  .inner {
    position: relative;
    width: 100%;
    max-width: 102.4rem;
    min-height: 100vh;
    margin: auto;
    background: url(images/img_slide_01.png) no-repeat 50% 50% / 100% auto;
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
