import React, { useEffect } from 'react';
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
  const moveTest = () => {
    router.push(`/map?lat=${recoilLocation.lat}&lng=${recoilLocation.lng}`);
  };

  const linkShare = () => {
    // window.Kakao.init('e30615da0741576c4249e7b7b3dec4ab'); // 내 웹 키를 할당하면 된다
    // window.Kakao.isInitialized();
    console.log(window.Kakao);
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('e30615da0741576c4249e7b7b3dec4ab');
      }
      kakao.Share.createCustomButton({
        container: '#kakaotalk-sharing-btn',
        templateId: 'e30615da0741576c4249e7b7b3dec4ab',
        templateArgs: {
          title: '제목 영역입니다.',
          description: '설명 영역입니다.',
        },
      });
    }
  };

  useEffect(() => {
    if (window.Kakao) {
      console.log('test');
      console.log(window.Kakao);
    }
  }, []);
  return (
    <>
      <IntroUI>
        <div className="inner">
          <BtnShare onClick={() => linkShare()}>카카오톡으로 내위치 공유하기</BtnShare>
        </div>
      </IntroUI>
    </>
  );
};
export default IntroView;
