import React from 'react';
import { IntroUI, BtnShare } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';

const IntroView = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <IntroUI>
        <div className="inner">
          <BtnShare>카카오톡으로 내위치 공유하기</BtnShare>
        </div>
      </IntroUI>
    </>
  );
};
export default IntroView;
