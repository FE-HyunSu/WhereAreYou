import React from 'react';
import { IntroUI, BtnShare } from './style';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { locationAtom } from '../../store/store';

const IntroView = () => {
  const router = useRouter();
  const recoilLocation = useRecoilValue(locationAtom);
  const moveTest = () => {
    router.push(`/map?lat=${recoilLocation.lat}&lng=${recoilLocation.lng}`);
  };
  return (
    <>
      <IntroUI>
        <div className="inner">
          <BtnShare onClick={() => moveTest()}>카카오톡으로 내위치 공유하기</BtnShare>
        </div>
      </IntroUI>
    </>
  );
};
export default IntroView;
