import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { locationAtom } from '../../store/store';
import Image from 'next/image';

declare global {
  interface Window {
    Kakao: any;
  }
}

const IntroView = () => {
  const router = useRouter();
  const recoilLocation = useRecoilValue(locationAtom);
  const locationSet = () => {
    router.push(`/map?lat=${recoilLocation.lat}&lng=${recoilLocation.lng}`);
  };

  return (
    <>
      <IntroUI>
        <div className="inner">
          <BtnShare onClick={() => locationSet()}>내위치 공유하기</BtnShare>
        </div>
      </IntroUI>
    </>
  );
};
export default IntroView;

const BgScaleMotion = keyframes`
  0%{background-size:100% auto;}
  100%{background-size:130% auto;}
`;

const IntroUI = styled.div`
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
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      min-height: -webkit-fill-available;
    }
    margin: auto;
    background: url(images/img_slide_01.png) no-repeat 50% 50% / 100% auto;
    animation: ${BgScaleMotion} 20s alternate infinite linear;
  }
`;

const BtnShare = styled.button`
  display: block;
  position: absolute;
  top: 75%;
  right: 0;
  left: 0;
  width: 25rem;
  margin: auto;
  padding: 2rem 0;
  background-color: #fbe64d;
  border-radius: 10rem;
  color: #3a3a3a;
  font-size: 1.4rem;
  font-weight: 500;
  z-index: 10;
`;
