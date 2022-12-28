import styled from 'styled-components';

export const IntroUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 50rem;
    background: url(images/img_slide_01.png) no-repeat 50% 50% / cover;
  }
`;

export const BtnShare = styled.button`
  display: block;
  position: absolute;
  top: 72%;
  right: 0;
  left: 0;
  width: 30rem;
  margin: auto;
  padding: 2.2rem 0;
  background-color: #fff000;
  border-radius: 10rem;
  color: #3a3a3a;
  font-size: 1.4rem;
  font-weight: 500;
  z-index: 10;
`;
