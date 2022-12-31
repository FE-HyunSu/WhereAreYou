import React from 'react';
import { IntroUI, BtnShare } from './style';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { locationAtom } from '../../store/store';

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
